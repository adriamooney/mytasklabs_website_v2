# My Task Labs — Design System Guide

> **Purpose:** This document captures all design patterns, tokens, and conventions used in the current codebase so Cursor (or any AI assistant) can continue development with full visual and structural consistency.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| UI Primitives | shadcn/ui (Radix UI base) |
| Icons | Lucide React |
| Component variants | class-variance-authority (cva) |
| Class merging | `cn()` from `src/app/components/ui/utils.ts` |

---

## Color Palette

All colors are defined as CSS custom properties in `src/styles/theme.css` and consumed via Tailwind's `@theme inline` block.

### Brand Colors (Light Mode)

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#030213` | Primary buttons, key text |
| `--primary-foreground` | `#ffffff` | Text on primary backgrounds |
| `--secondary` | `oklch(0.95 0.0058 264.53)` | Secondary buttons |
| `--secondary-foreground` | `#030213` | Text on secondary backgrounds |
| `--background` | `#ffffff` | Page background |
| `--foreground` | `oklch(0.145 0 0)` | Default body text |
| `--muted` | `#ececf0` | Subtle backgrounds |
| `--muted-foreground` | `#717182` | Subdued text, placeholders |
| `--accent` | `#e9ebef` | Hover states, accent fills |
| `--border` | `rgba(0,0,0,0.1)` | Default borders |
| `--destructive` | `#d4183d` | Error / destructive actions |

### Indigo (Site's Actual Brand Color)

The theme tokens use a near-black primary, but all page-level components use a consistent **indigo** palette via Tailwind utility classes:

| Class | Usage |
|---|---|
| `bg-indigo-600` | Primary brand fill (hero, logo, buttons, icons, CTA |
| `bg-indigo-700` | Hover/darker shade in gradients |
| `bg-indigo-800` | Deep gradient endpoint |
| `text-indigo-600` | Icon color, active nav links, hover text |
| `text-indigo-100` | Hero body text on dark indigo background |
| `text-indigo-200` | Decorative "VS" text in Differentiation section |
| `border-indigo-200` | Highlighted card borders (default) |
| `border-indigo-300` | Card border on hover |
| `border-indigo-400` | Card border on active hover |
| `hover:bg-indigo-50/30` | Subtle card background on hover |
| `from-indigo-600 to-indigo-700` | Button/header gradient |
| `from-indigo-600 to-indigo-800` | Hero section gradient |

### Neutral Grays (Supporting Palette)

| Class | Usage |
|---|---|
| `text-gray-900` | Section headings |
| `text-gray-700` | Feature list text, medium body |
| `text-gray-600` | Body text, descriptions, nav links |
| `text-gray-400` | Footer text |
| `text-gray-300` | CTA body text (on dark bg) |
| `bg-white` | Card and section backgrounds |
| `bg-gray-50` | Alternate section background (Process) |
| `bg-gray-900` | Footer background |
| `bg-gray-900 to black` | CTA gradient background |
| `border-gray-200` | Default card/input borders |
| `border-gray-800` | Footer divider |

### Semantic Colors

| Class | Usage |
|---|---|
| `bg-red-100` / `text-red-600` | "Traditional" X icons in Differentiation |
| `bg-green-100` / `text-green-600` | "My Task Labs" checkmark icons in Differentiation |

---

## Typography

Base font size is set via `--font-size: 16px` on `:root`.

### Heading Scale

| Element | Tailwind Class | Weight | Line Height |
|---|---|---|---|
| `h1` | `text-2xl` (base) | `font-medium` (500) | 1.5 |
| `h2` | `text-xl` (base) | `font-medium` (500) | 1.5 |
| `h3` | `text-lg` (base) | `font-medium` (500) | 1.5 |
| `h4` | `text-base` | `font-medium` (500) | 1.5 |

**Note:** Page-level components override the base styles directly with Tailwind classes:

| Component | Class used |
|---|---|
| Hero `h1` | `text-5xl font-bold` |
| Section `h2` | `text-4xl font-bold` |
| Card `h3` | `text-xl font-semibold` or `text-2xl font-semibold` |
| Nav brand | `text-xl font-semibold` |

### Body Text

| Use case | Class |
|---|---|
| Section subtitle / lead | `text-xl text-gray-600` |
| Card description | `text-gray-600` (base size) |
| Feature list items | `text-gray-700` (base size) |
| Footer links | `text-sm` |
| CTA body | `text-xl text-gray-300` |

---

## Spacing & Layout

### Page Container

All sections use a consistent max-width container:

```tsx
<div className="max-w-7xl mx-auto px-6">
```

### Section Padding

All top-level sections use `py-24` vertical padding.

### Section Header Block

Every section uses a centered heading block with consistent spacing:

```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">Section Title</h2>
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Section subtitle goes here.
  </p>
</div>
```

### Grid Layouts

| Layout | Classes |
|---|---|
| 4-column (Services, Process) | `grid md:grid-cols-2 lg:grid-cols-4 gap-8` |
| 3-column (Industries) | `grid md:grid-cols-3 gap-8` |
| 2-column (Differentiation) | `grid md:grid-cols-2 gap-6` |
| Footer | `grid md:grid-cols-4 gap-8` |

---

## Border Radius

Defined via `--radius: 0.625rem` with derived scale:

| Token | Value | Tailwind |
|---|---|---|
| `--radius-sm` | `calc(var(--radius) - 4px)` | `rounded-sm` |
| `--radius-md` | `calc(var(--radius) - 2px)` | `rounded-md` |
| `--radius-lg` | `var(--radius)` = `0.625rem` | `rounded-lg` |
| `--radius-xl` | `calc(var(--radius) + 4px)` | `rounded-xl` |

Page components use:

- `rounded-lg` — service cards, logo block, input fields, buttons
- `rounded-xl` — ProcessCard, IndustryCard (more prominent cards)
- `rounded-full` — process step number circles, icon badge backgrounds

---

## Cards

There are two card patterns in use:

### Standard Service Card

Flat border with hover effects. Used in the Services section.

```tsx
<div className="p-6 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
  {/* icon, title, description */}
</div>
```

### Elevated Feature Card (with group hover)

Used for ProcessCard and IndustryCard — more interactive with lift animations.

```tsx
<div className="group bg-white border border-gray-200 rounded-xl p-8
  hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
  {/* content with group-hover child transitions */}
</div>
```

**Group hover patterns used inside cards:**

```tsx
// Icon container scales up
<div className="transition-transform duration-500 group-hover:scale-105">

// Heading changes color to indigo
<h3 className="... transition-colors duration-300 group-hover:text-indigo-600">

// Number badge scales and gains shadow
<div className="... transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
```

### Comparison Card (Differentiation section)

Two variants side by side:

```tsx
{/* Traditional — muted */}
<div className="group bg-white border border-gray-200 rounded-lg p-4
  transition-all duration-300 hover:border-gray-300 hover:shadow-md">

{/* My Task Labs — highlighted */}
<div className="group bg-white border-2 border-indigo-200 rounded-lg p-4
  transition-all duration-300 hover:border-indigo-400 hover:shadow-lg
  hover:-translate-y-1 hover:bg-indigo-50/30">
```

---

## Buttons

Buttons come from `src/app/components/ui/button.tsx` using `cva`. Always import from `./ui/button`.

### Variants

| Variant | Classes | Use |
|---|---|---|
| `default` | `bg-primary text-primary-foreground hover:bg-primary/90` | Default actions |
| `secondary` | `bg-secondary text-secondary-foreground hover:bg-secondary/80` | Hero CTA, main CTAs |
| `outline` | `border bg-background text-foreground hover:bg-accent` | Ghost-style actions |
| `ghost` | `hover:bg-accent hover:text-accent-foreground` | Toolbar/nav actions |
| `destructive` | `bg-destructive text-white hover:bg-destructive/90` | Delete/danger |
| `link` | `text-primary underline-offset-4 hover:underline` | Inline text links |

### Sizes

| Size | Height | Padding |
|---|---|---|
| `sm` | `h-8` | `px-3` |
| `default` | `h-9` | `px-4 py-2` |
| `lg` | `h-10` | `px-6` |
| `icon` | `size-9` | square |

### Usage Patterns

```tsx
// Hero primary CTA
<Button size="lg" variant="secondary">
  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
</Button>

// Hero secondary CTA (on dark bg)
<Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
  Learn More
</Button>

// Nav CTA
<Button size="sm">Get Started</Button>
```

---

## Icons

Icons come from two sources:

### Lucide React (utility icons)

```tsx
import { ArrowRight, Search, Zap, Users, BarChart3, Check, X } from 'lucide-react';
```

Usage: `<ArrowRight className="ml-2 h-5 w-5" />` or `<Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />`

Standard icon sizes:
- `h-5 w-5` — inline with text, feature list checkmarks
- `h-10 w-10` — service card icons

### Custom SVG Icons (in `src/app/components/icons/`)

All custom icons are React components that return inline SVGs. Rendered as:

```tsx
import { IdentifyIcon } from './icons/IdentifyIcon';
<IdentifyIcon />  // no props, self-contained sizing
```

Available custom icons:
- `DesignIcon`, `IdentifyIcon`, `ImplementIcon`, `OptimizeIcon` — Process section
- `HomeServiceIcon`, `ProfessionalServiceIcon`, `OperationsIcon` — Industries section
- `TraditionalIcon`, `MyTaskLabsIcon` — Differentiation section

---

## Animations & Transitions

### Transition Defaults

Most interactive elements use:

```css
transition-all duration-300
```

Cards that lift on hover:
```css
transition-all duration-300 hover:-translate-y-2
```

### Custom Float Animation

Defined in `theme.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

Use `animate-float` on decorative elements that should bob gently.

---

## Section Backgrounds

Sections alternate to create visual rhythm:

| Section | Background |
|---|---|
| Header | `bg-white` with `border-b border-gray-200` |
| Hero | `bg-gradient-to-br from-indigo-600 to-indigo-800` |
| Services | `bg-white` |
| Process | `bg-gray-50` |
| Industries | `bg-white` |
| Differentiation | `bg-white` |
| CTA | `bg-gradient-to-br from-gray-900 to-black` |
| Footer | `bg-gray-900` |

**Pattern:** Alternate between `bg-white` and `bg-gray-50` for interior sections. Use strong gradients for hero and final CTA.

---

## Header / Navigation

```tsx
<header className="border-b border-gray-200 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
      <span className="text-xl font-semibold text-gray-900">My Task Labs</span>
    </div>
    {/* Nav */}
    <nav className="hidden md:flex items-center gap-8">
      <a href="#section" className="text-gray-600 hover:text-gray-900">Link</a>
      <Button size="sm">Get Started</Button>
    </nav>
  </div>
</header>
```

Nav links use `text-gray-600 hover:text-gray-900`. Nav is hidden on mobile (`hidden md:flex`).

---

## Footer

4-column layout on desktop, stacked on mobile:

```tsx
<footer className="bg-gray-900 text-gray-400 py-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Logo col, then 3 link cols */}
    </div>
    <div className="border-t border-gray-800 pt-8 text-sm text-center">
      © 2026 My Task Labs. All rights reserved.
    </div>
  </div>
</footer>
```

Footer headings: `text-white font-semibold mb-4`
Footer links: `text-sm hover:text-white` (inherits `text-gray-400`)

---

## Component File Structure

```
src/
├── main.tsx
├── styles/
│   ├── theme.css          ← CSS variables + base typography
│   ├── tailwind.css       ← @import tailwindcss
│   └── index.css          ← global resets
└── app/
    ├── App.tsx            ← composes all sections
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── Services.tsx
        ├── Process.tsx
        ├── ProcessCard.tsx
        ├── Industries.tsx
        ├── IndustryCard.tsx
        ├── Differentiation.tsx
        ├── CTA.tsx
        ├── Footer.tsx
        ├── icons/         ← custom SVG icon components
        │   ├── DesignIcon.tsx
        │   ├── IdentifyIcon.tsx
        │   ├── ImplementIcon.tsx
        │   ├── OptimizeIcon.tsx
        │   ├── HomeServiceIcon.tsx
        │   ├── ProfessionalServiceIcon.tsx
        │   ├── OperationsIcon.tsx
        │   ├── TraditionalIcon.tsx
        │   └── MyTaskLabsIcon.tsx
        ├── figma/
        │   └── ImageWithFallback.tsx
        └── ui/            ← shadcn/ui primitives (don't edit directly)
            ├── button.tsx
            ├── card.tsx
            ├── badge.tsx
            └── ... (full shadcn set)
```

---

## Code Conventions

- **All imports** use relative paths from the component file
- **shadcn UI components** are always imported from `./ui/<component>`
- **Utility function** `cn()` is imported from `./ui/utils` for conditional class merging
- **Data arrays** (services, steps, industries, comparisons) are defined at the top of each component file as `const`, not in a separate data file
- **Icons as props** are typed as `React.ComponentType` and rendered as `<Icon />` inside components
- **No default exports** — all components use named exports (`export function ComponentName`)
- **Section IDs** for anchor links: `id="services"`, `id="process"`, `id="industries"`

---

## Do's and Don'ts

**Do:**
- Keep `py-24` on all top-level sections
- Use `max-w-7xl mx-auto px-6` for all content containers
- Use `mb-16` + `text-center` for all section header blocks
- Use `group` + `group-hover:` for multi-element card interactions
- Use `transition-all duration-300` as the default transition
- Use `rounded-xl` for prominent feature cards, `rounded-lg` for simpler ones
- Wrap custom icons as zero-prop React components in `src/app/components/icons/`

**Don't:**
- Don't mix Tailwind `text-indigo-*` colors with the CSS variable `--primary` (they serve different roles — keep them separate)
- Don't add new font weights — the theme only uses `font-medium` (500) and `font-normal` (400) as base; page-level headings may use `font-semibold` or `font-bold`
- Don't use `border-radius` or `padding` values outside Tailwind's scale
- Don't edit files in `src/app/components/ui/` — these are managed by shadcn/ui
- Don't inline SVG icons in component files — put them in `src/app/components/icons/`
