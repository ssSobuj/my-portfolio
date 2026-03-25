# AGENTS.md

Guidance for coding agents working in this repository.

## Scope and precedence

- This file applies to the entire repo at `/Users/f/Desktop/Personal/Portfolio/my-portfolio`.
- Follow direct user instructions first, then this file, then existing project conventions.
- Prefer minimal, targeted edits over broad refactors.

## Repository facts (observed)

- Framework: React 18 + TypeScript + Vite 5.
- Styling: Tailwind CSS + `tailwindcss-animate` + shadcn/ui components.
- Routing: `react-router-dom`.
- Module alias: `@/*` maps to `src/*` (see `tsconfig.json` and `vite.config.ts`).
- ESLint: flat config in `eslint.config.js`.
- Test runner: not configured yet (no test script, no test deps, no test files).

## Rule files check

The following rule locations were checked and are currently not present:

- `.cursorrules`
- `.cursor/rules/`
- `.github/copilot-instructions.md`

If any of these are added later, update this file and follow those rules.

## Project layout

- App entry: `src/main.tsx`
- Root app shell/router/providers: `src/App.tsx`
- Route pages: `src/pages/*`
- Feature sections: `src/components/*`
- Reusable UI primitives: `src/components/ui/*` (shadcn-style)
- Shared hooks: `src/hooks/*`
- Shared utilities: `src/lib/utils.ts`
- Global styles/tokens: `src/index.css`

## Build, lint, and test commands

### Primary commands

- Dev server: `npm run dev`
- Production build: `npm run build`
- Development-mode build: `npm run build:dev`
- Preview production build: `npm run preview`
- Lint all files: `npm run lint`
- Install deps: `npm install`

### Useful targeted commands

- Lint a single file: `npx eslint src/components/Contact.tsx`
- Lint a folder: `npx eslint src/components`
- Fix lint issues where safe: `npx eslint . --fix`
- Type-check app config without emit: `npx tsc --noEmit -p tsconfig.app.json`

### Tests (current status + single-test guidance)

- There is currently no test framework configured in this repo.
- There is no `npm test` script and no existing `*.test.*` or `*.spec.*` files.
- If you add Vitest, typical commands would be:

```bash
# all tests
npx vitest run

# watch mode
npx vitest

# single file
npx vitest run src/components/Navbar.test.tsx

# single test name
npx vitest run -t "renders nav links"
```

- If you introduce tests, add scripts to `package.json` (`test`, `test:watch`) and update this file.

## Code style conventions

### Imports

- Prefer this order:
  1) external packages
  2) aliased internal imports (e.g., `@/components/...`)
  3) relative imports (`./` or `../`)
- Keep one blank line between import groups.
- Use `import type` for type-only imports.
- Prefer the `@/` alias for cross-folder imports inside `src`.
- Keep relative imports for same-folder neighbors when clearer.

### Formatting

- No Prettier config is present; follow the surrounding file style exactly.
- Existing code style is mixed (some files use semicolons, some do not).
- For edits, preserve local consistency within each file.
- Use double quotes where that file uses double quotes; do not reformat unrelated lines.
- Keep lines readable; avoid dense one-liners for complex JSX.

### TypeScript and types

- TS is intentionally permissive in app config (`strict: false`, `noImplicitAny: false`).
- Even so, prefer explicit types for:
  - public function signatures
  - component props
  - hook return values when non-obvious
- Avoid `any` unless unavoidable; use unions/generics first.
- Use non-null assertions (`!`) sparingly and only with clear invariants.

### React patterns

- Use function components with `const ComponentName = () => { ... }`.
- Component names and filenames should be PascalCase (`Navbar.tsx`, `NotFound.tsx`).
- Hooks should be prefixed with `use` (`useIsMobile`, `useToast`).
- Keep side effects in `useEffect`; clean up listeners/timers on unmount.
- Prefer controlled form inputs for forms.

### Naming conventions

- Variables/functions: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` for true constants.
- Types/interfaces: `PascalCase`.
- Boolean state should read clearly (`isMenuOpen`, `activeSection`).
- Event handlers: `handleX` naming (`handleSubmit`, `handleChange`).

### Tailwind and UI

- Tailwind is the primary styling approach; avoid ad-hoc inline style objects.
- Reuse existing design tokens and utility patterns from `src/index.css`.
- Use `cn()` from `src/lib/utils.ts` for class merging when conditional classes are needed.
- Prefer existing `src/components/ui/*` primitives before creating new custom controls.

### Error handling and logging

- Do not swallow errors silently.
- For async UI actions, surface user-facing failures (toast/message) and log useful diagnostics.
- Prefer `try/catch` around async/await flows.
- Include actionable context in logs (what failed, where).
- Avoid noisy `console.log` in final production code unless intentional.

### Accessibility and UX

- Add `aria-label` for icon-only interactive elements.
- Preserve keyboard accessibility and focus styles.
- Keep external links safe with `target="_blank"` + `rel="noopener noreferrer"`.

## Change management for agents

- Do not edit generated/vendor-style UI files unless the task requires it.
- Keep changes scoped; avoid opportunistic rewrites.
- Do not introduce new dependencies unless necessary for the requested task.
- Run lint/build after meaningful changes when feasible.
- If you add commands, scripts, or conventions, update `AGENTS.md` in the same change.

## Quick pre-PR checklist

- Code builds: `npm run build`
- Lint passes: `npm run lint`
- No unrelated files reformatted
- Documentation updated when workflow changes
