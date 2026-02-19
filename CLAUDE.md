# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@taikai/html-editor` is a React component library that wraps the Froala WYSIWYG editor (`react-froala-wysiwyg` v4.1.0 — pinned to v4 due to licensing). It exports two components: `HtmlEditor` (editable rich text editor) and `HtmlEditorView` (read-only HTML viewer). Published to npm as a public scoped package.

## Commands

- **Build:** `npm run build` (Vite library mode → `dist/index.js` CJS + `dist/index.es.js` ESM)
- **Dev (watch mode):** `npm run start`
- **Lint:** `npm run lint`
- **Storybook:** `npm run storybook` (port 6006, Vite-powered)
- **Tests:** No test suite configured.
- **Publish:** Uses `np` library. `npm run prepare` triggers build automatically.

## Architecture

The library has three components with a clear layering:

- **`src/index.js`** — Public entry point. Exports `HtmlEditor` and `HtmlEditorView`.
- **`src/components/html-editor.jsx`** — Main editor. Wraps `FroalaEditor` with a heavily configurable props API. Each toolbar feature (bold, image, video, table, etc.) is toggled via boolean props. Builds a Froala `config` object from props and passes it through. Supports a custom `imageUploadPlugin` hook for image upload interception.
- **`src/components/html-editor-view.jsx`** — Read-only viewer. Wraps `FroalaEditorView`, accepts `value` (HTML string) and `licenseKey`.
- **`src/components/html-editor-wrapper.jsx`** — Shared styled-component (`styled-components` v6) providing layout and typography styles for both editor and viewer. Uses `.html-editor` / `.html-viewer` class names to differentiate. Uses transient props (`$width`) to avoid DOM forwarding.

## Build System

- **Vite 7** in library mode with `@vitejs/plugin-react`.
- Peer dependencies (`react`, `prop-types`) and `styled-components` are externalized.
- Package is ESM (`"type": "module"` in package.json).

## Key Conventions

- All component props use `PropTypes` for validation with `defaultProps` for defaults.
- Toolbar buttons are conditionally included using `booleanProp && "buttonName"` pattern (falsy values filtered by Froala).
- Storybook 9 stories live in `src/stories/` and serve as the primary way to develop and preview components.
- ESLint 9 flat config (`eslint.config.js`) with `@eslint/js` + `eslint-plugin-react`.
- Font: Space Grotesk (bundled in `src/static/fonts/`), loaded via `src/static/css/main.css`.
