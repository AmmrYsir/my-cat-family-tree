# Agent Guidance

## 1. Build / Lint / Test Commands

| Script | Command | Purpose | Notes |
|--------|---------|---------|-------|
| **dev** | `npm run dev` or `vite` | Starts the development server in watch mode with hot‑reload | Uses Vite + SolidJS plugin |
| **build** | `npm run build` | Produces a production build in `dist/` | Run before deployment |
| **preview** | `npm run serve` | Serves the built app locally for manual inspection | Mirrors production environment |

### Linting & Formatting
The project currently has no dedicated linter, but you should follow these practices:

- Use **Prettier** formatting (2‑space indent, single quotes, trailing commas in multiline objects/arrays). No semicolons are required but may be used consistently.
- Keep imports alphabetized and grouped: third‑party first, then relative paths.
- Run `pnpm lint` if a linter script is added later.

### Running Tests
No test framework is set up yet. When adding tests (e.g., Vitest or Jest), use the following patterns:

```bash
# Run all tests
vitest run

# Run a single file
vitest run path/to/file.test.ts
```
If you prefer Jest, replace `vitest` with `jest` and adjust config accordingly.

## 2. Code Style Guidelines

| Aspect | Rule |
|--------|------|
| **Imports** | Alphabetical order; third‑party modules first, then relative paths. Use absolute imports if configured via `tsconfig.json`. |
| **Formatting** | Prettier defaults: 2‑space indentation, single quotes, trailing commas for multiline literals. Semicolons are optional but should be used consistently throughout the codebase. |
| **TypeScript** | Prefer explicit types for function parameters and return values. Use `unknown` instead of `any`. Keep interfaces concise; export them if reused elsewhere. |
| **Naming Conventions** | • Components: PascalCase (`App`, `UserCard`).
• Functions/variables: camelCase.
• Constants: UPPER_SNAKE_CASE.
• Enums: PascalCase. |
| **Error Handling** | Wrap async operations in `try/catch`. Propagate errors with meaningful messages or custom error classes. Do not silently swallow errors. |
| **Reactivity (SolidJS)** | Use `createSignal`, `createEffect`, and `onCleanup` correctly. Avoid side‑effects inside render functions; perform them inside effects or callbacks. |
| **Testing** | Assert on rendered output or state changes, not implementation details. Keep tests deterministic and isolated. |
| **Documentation** | Add JSDoc comments for public APIs and complex logic. Use `@returns` and `@throws` tags where appropriate. |
| **File Structure** | Organize components in `src/components`, utilities in `src/utils`, styles in `src/styles`. Keep files small (≤ 200 lines) to aid readability. |
| **Dependency Management** | Declare dependencies in `package.json`. Use semantic versioning; lockfile (`pnpm-lock.yaml`) ensures reproducible installs. |
| **Version Control** | Commit only when a feature or bugfix is complete. Follow conventional commit messages: `feat`, `fix`, `docs`, etc. |

## 3. Cursor Rules & Copilot Instructions
No `.cursor/rules/` or `.cursorrules` directories were found in this repository.

No custom Copilot instructions (`.github/copilot-instructions.md`) exist either.

---

Feel free to adapt these guidelines as the project evolves and new tools are added.
