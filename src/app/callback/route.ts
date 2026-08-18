import type { NextRequest } from "next/server";

const PROVIDER = "github";

function renderResult(message: string) {
  const html = `<!doctype html>
<html>
  <body>
    <script>
      (() => {
        const message = ${JSON.stringify(message)};
        const receiveMessage = (event) => {
          if (event.data === "authorizing:${PROVIDER}") {
            window.opener?.postMessage(message, event.origin);
            window.removeEventListener("message", receiveMessage);
          }
        };
        window.addEventListener("message", receiveMessage);
        window.opener?.postMessage("authorizing:${PROVIDER}", window.location.origin);
      })();
    </script>
  </body>
</html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

function success(token: string) {
  return renderResult(
    `authorization:${PROVIDER}:success:${JSON.stringify({ provider: PROVIDER, token })}`,
  );
}

function failure(error: string, errorCode: string) {
  return renderResult(
    `authorization:${PROVIDER}:error:${JSON.stringify({ provider: PROVIDER, error, errorCode })}`,
  );
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const csrfCookie = request.cookies.get("csrf-token")?.value ?? "";
  const [cookieProvider, cookieState] = csrfCookie.split("_");

  if (!code || !state || cookieProvider !== PROVIDER || cookieState !== state) {
    return failure("CSRF token mismatch or missing authorization code", "CSRF_DETECTED");
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return failure("Server is missing GitHub OAuth credentials", "TOKEN_REQUEST_FAILED");
  }

  let tokenResponse: Response;
  try {
    tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
  } catch {
    return failure("Could not reach GitHub to exchange the code", "TOKEN_REQUEST_FAILED");
  }

  let data: { access_token?: string; error?: string };
  try {
    data = await tokenResponse.json();
  } catch {
    return failure("GitHub returned a malformed response", "MALFORMED_RESPONSE");
  }

  if (!data.access_token) {
    return failure(data.error ?? "No access token returned", "TOKEN_REQUEST_FAILED");
  }

  const response = success(data.access_token);
  response.headers.append(
    "Set-Cookie",
    "csrf-token=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax",
  );
  return response;
}
