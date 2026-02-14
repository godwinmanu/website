# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Emmanuel Godwin HOUENOU (godwinmanu). Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Development Commands

```bash
pnpm dev        # Start dev server with HMR
pnpm build      # TypeScript check + production build
pnpm lint       # ESLint check
pnpm preview    # Preview production build locally
```

## Architecture

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Works, Blog, Contact
│   └── ui/           # Reusable UI components (buttons, cards, etc.)
├── hooks/            # Custom React hooks (useTheme)
├── lib/              # Utilities (cn function for class merging)
└── assets/images/    # Static images (profile photo)
```

## Styling

- **Tailwind CSS v4** with custom theme in `src/index.css`
- **Fonts:** Sora (headings), Inter (body) via Google Fonts
- **Dark mode:** Toggle via `useTheme` hook, applies `.dark` class to root
- **Color palette:** Cyan/sky accent (light), Amber/gold accent (dark)

## Path Aliases

Use `@/` to import from `src/`:
```typescript
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
```

## Key Dependencies

- `lucide-react` - Icons
- `class-variance-authority`, `clsx`, `tailwind-merge` - Utility classes (Shadcn UI pattern)
