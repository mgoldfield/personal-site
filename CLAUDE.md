# Claude Code Project Context

## Project Overview
Personal website built with Next.js 15.5.2 and React 19.1.1, featuring a blog system with markdown support.

## Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with dark mode support
- **Content**: Markdown blog posts with gray-matter frontmatter
- **Typography**: @tailwindcss/typography for prose styling

## Project Structure
- `/src/app/blog/page.tsx` - Blog listing page
- `/src/app/posts/[postId]/page.tsx` - Individual blog post pages
- `/src/blog-posts/*.md` - Markdown blog posts
- `/src/lib/posts.tsx` - Blog post utilities and data fetching
- `/src/app/components/posts.tsx` - Blog post components

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks (if available)
```

## Blog Post Format
Create `.md` files in `src/blog-posts/` with frontmatter:
```yaml
---
title: Post Title
date: MM-DD-YYYY
---

Markdown content here...
```

## Code Style Preferences
- Use TypeScript for type safety
- Follow existing component patterns
- Maintain responsive design with Tailwind
- Keep styling simple but polished
- Support both light and dark modes

## Notes
- Blog system automatically generates static pages for all markdown posts
- Individual post pages are generated at build time via `generateStaticParams`
- Posts are sorted by date (newest first)