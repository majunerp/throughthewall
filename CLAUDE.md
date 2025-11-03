# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router, TypeScript, React 19, and Tailwind CSS v4. It's bootstrapped with `create-next-app` and follows modern Next.js conventions.

## Development Commands

- **Start development server**: `npm run dev`
  - Opens on http://localhost:3000
  - Hot-reloading enabled for all changes
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`
  - Uses ESLint with Next.js TypeScript configuration

## Architecture

### Project Structure
- **`app/`**: Next.js App Router directory
  - `layout.tsx`: Root layout with Geist font configuration (sans and mono variants)
  - `page.tsx`: Homepage component
  - `globals.css`: Global Tailwind styles
- **Path alias**: `@/*` maps to repository root (configured in tsconfig.json)

### Key Technologies
- **Next.js 16**: App Router architecture
- **React 19.2**: Latest React with Server Components support
- **TypeScript**: Strict mode enabled, targeting ES2017
- **Tailwind CSS v4**: Using new PostCSS plugin (`@tailwindcss/postcss`)
- **Font Optimization**: Uses `next/font` with Geist typeface

### TypeScript Configuration
- JSX mode: `react-jsx` (automatic JSX runtime)
- Module resolution: bundler
- Strict type checking enabled

## Notes
- The repository uses spaces in its path (`C:\Users\ZhuanZ\the wall\throughthewall`), so ensure proper quoting in shell commands
- ESLint ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
