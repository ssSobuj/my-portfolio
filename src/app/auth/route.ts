import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "node:crypto";

export async function GET(request: NextRequest) {
  const provider = request.nextUrl.searchParams.get("provider");
  if (provider !== "github") {
    return new NextResponse(`Unsupported provider: ${provider}`, { status: 400 });
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("Server is missing GITHUB_OAUTH_CLIENT_ID", { status: 500 });
  }

  const state = crypto.randomBytes(16).toString("hex");
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("csrf-token", `github_${state}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return response;
}
