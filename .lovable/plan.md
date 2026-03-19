

# Fix: Desktop Header/Logo overlapping Hero Content

## Problem
The desktop logo is `h-28` (112px tall), making the fixed header very large. The hero section only has `lg:pt-32` (128px) top padding — not enough to clear the header (top bar + logo + padding ≈ 160px+).

## Changes

### 1. `src/components/Header.tsx` — Reduce desktop logo height
- Line 71: Change `h-28` → `h-16` (64px) — still prominent but reasonable

### 2. `src/components/HeroSection.tsx` — Increase desktop top padding
- Line 73: Change `lg:pt-32` → `lg:pt-40` for more clearance

### 3. `src/components/ProductHero.tsx` & `src/components/ServiceHero.tsx`
- Increase top padding similarly to account for the fixed header on desktop

