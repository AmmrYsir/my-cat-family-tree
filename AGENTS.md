# Agent Guidance for My Cat Family Tree Project

## 1. Build / Lint / Test Commands

| Script | Command | Purpose | Notes |
|--------|---------|---------|-------|
| **dev** | `npm run dev` or simply `vite` | Starts the Vite development server with hot‑reload | Uses SolidJS + TypeScript, watches for changes |
| **build** | `npm run build` | Produces a production build in `dist/` | Run before deployment; output is minified and tree‑shaken |
| **preview** | `npm run serve` | Serves the built app locally for manual inspection | Mirrors production environment, useful for QA |
| **lint** | `pnpm lint` (future) | Runs Prettier in check mode | Add a linter later if needed |

### Running Tests
The project currently has no test framework configured. When adding tests you can choose either Vitest or Jest.

#### Vitest Example
```bash
# Install Vitest and related dependencies first
pnpm add -D vitest @testing-library/svelte @testing-library/dom

# Run all tests in the `tests/` folder
vitest run

# Run a single test file
vitest run tests/example.test.ts
```

#### Jest Example
```bash
# Install Jest and ts-jest
pnpm add -D jest ts-jest @types/jest

# Run all tests
jest

# Run a specific test file
jest tests/example.test.ts
```

### Running a Single Test from the Command Line
Both Vitest and Jest accept a path to a test file. If you only want to run one spec, provide its relative path:
```bash
vitest run src/components/MyComponent.test.tsx
# or for Jest
jest src/components/MyComponent.test.tsx
```

## 2. Code Style Guidelines

The repository follows a lightweight yet consistent style that balances readability with developer ergonomics.

| Aspect | Rule |
|--------|------|
| **Imports** | Alphabetically sorted; third‑party packages first, then relative imports. If `tsconfig.json` has a `"baseUrl"` or `"paths"`, prefer absolute imports for clarity. |
| **Formatting** | Prettier (2‑space indent, single quotes, trailing commas in multiline literals). Semicolons are optional but must be used consistently across the codebase. |
| **TypeScript** | Prefer explicit types on function parameters and return values; avoid `any`. Use `unknown` when a value's type is truly unknown. Interfaces should be concise and exported only if reused elsewhere. |
| **Naming Conventions** | • Components: PascalCase (`UserCard`, `AnimalList`).
• Functions/variables/constants: camelCase.
• Constants that never change: UPPER_SNAKE_CASE.
• Enums: PascalCase. |
| **Error Handling** | Wrap async operations in `try/catch`. Propagate errors with descriptive messages or custom error classes; do not swallow silently. Use `throw new Error(...)` when appropriate. |
| **Reactivity (SolidJS)** | Use `createSignal`, `createEffect`, and `onCleanup` correctly. Avoid side‑effects directly inside JSX; move them to effects or callbacks. Early returns help keep logic flat. |
| **Testing** | Assertions should target rendered output, state changes, or public API behavior—not internal implementation details. Tests must be deterministic, isolated, and run quickly. |
| **Documentation** | Public functions and complex modules require JSDoc comments with `@returns` and `@throws`. Keep comments concise but informative. |
| **File Structure** | • `src/components/` – UI components.
• `src/utils/` – helper functions, types.
• `src/styles/` – global or shared CSS modules.
Maintain files under ~200 lines; split larger modules into sub‑files if needed. |
| **Dependency Management** | All dependencies live in `package.json`. Use semantic versioning (`^`, `~`) and keep the lockfile (`pnpm-lock.yaml`) up to date. |
| **Version Control** | Commit only when a feature or bugfix is fully implemented and tested. Follow conventional commits: `feat`, `fix`, `docs`, `style`, `refactor`. |

## 3. Cursor Rules & Copilot Instructions
There are no custom cursor rules (`.cursor/rules/` or `.cursorrules`) in this repository.

No custom Copilot instructions (`.github/copilot-instructions.md`) are present either.

---

### Quick Reference for Agents
- **Build**: `npm run build`
- **Serve Production Build**: `npm run serve`
- **Run a Single Test (Vitest)**: `vitest run path/to/file.test.ts`
- **Lint Check (future)**: `pnpm lint`

Feel free to expand or modify these guidelines as the project evolves and new tooling is added.

