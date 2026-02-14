# godwinmanu.

Personal portfolio website for Emmanuel Godwin HOUENOU — Full Stack Developer based in Benin.

**Live:** [godwinmanu.surge.sh](http://godwinmanu.surge.sh)

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** with custom theme
- **Lucide React** for icons
- Articles fetched from **DEV.to API**

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm preview    # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Works, Blog, Contact
│   └── ui/           # Reusable UI components
├── data/             # Constants and static data
├── hooks/            # Custom React hooks
├── lib/              # Utilities
└── assets/images/    # Optimized WebP images
```

## Deployment

```bash
pnpm build
surge dist godwinmanu.surge.sh
```
