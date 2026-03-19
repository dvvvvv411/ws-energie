

# Rebranding Plan: GHS → WS Energie

## Summary
Global find-and-replace across ~15 files to update company data, prices, brand name, and founding year.

## Changes by Category

### 1. Company Name & Brand
Replace across all files:
- `GHS Beteiligungs GmbH` → `WS-Energie Verwaltungs-GmbH`
- `GHS Heizöl` → `WS Energie`
- `GHS` (in context) → `WS Energie`

**Files affected:** index.html, Header.tsx, Footer.tsx, HeroSection.tsx, CompanySection.tsx, AboutUs.tsx, Impressum.tsx, Datenschutz.tsx, AGB.tsx, Widerrufsrecht.tsx, ServiceContact.tsx, PriceCalculator.tsx, HorizontalPriceCalculator.tsx, MobilePriceCalculator.tsx

### 2. Address
- `Johannes-Kepler-Str. 14` → `Mittlere Bleiche 26`
- `55129 Mainz` → `55116 Mainz`

**Files:** Footer.tsx, Impressum.tsx, Datenschutz.tsx, AGB.tsx, Widerrufsrecht.tsx, AboutUs.tsx

### 3. Registration & Tax
- `HRB 3983` → `HRB 43804`
- `DE243309984` → `DE369810911`

**Files:** Impressum.tsx, AboutUs.tsx

### 4. Contact
- `06131-6365853` / `+4961316365853` → `06131-8888965` / `+4961318888965`
- `info@ghs-heizoel.de` → `info@ws-heizoel.de`
- `ghs-heizoel.de` → `ws-heizoel.de` (including checkout URLs)

**Files:** Header.tsx, Footer.tsx, Impressum.tsx, Datenschutz.tsx, Widerrufsrecht.tsx, AboutUs.tsx, ServiceContact.tsx, DeliverySection.tsx, PriceCalculator.tsx, HorizontalPriceCalculator.tsx, MobilePriceCalculator.tsx

### 5. Geschäftsführung
Remove the "Geschäftsführung" section (card) from Impressum.tsx. Remove any mention of "Florian Schmitt" across all files.

### 6. Prices
- `0.60` → `0.90` and `0.63` → `0.93` in PriceCalculator.tsx, HorizontalPriceCalculator.tsx, MobilePriceCalculator.tsx
- `0.70` → `0.90` and `0.73` → `0.93` in ProductSelector.tsx
- Update PriceCard examples in DesignSystem.tsx (`0.70` → `0.90`, `0.73` → `0.93`, adjust `originalPrice` proportionally)
- Update PriceOverviewSection.tsx chart data proportionally (+0.20 across all values)

### 7. Founding Year
- `2007` → `2013` everywhere (CompanySection.tsx, AboutUs.tsx)
- `Seit 2007` → `Seit 2013`
- Adjust "über 18 Jahre" → "über 12 Jahre" and "über 20 Jahren" → "über 12 Jahren"

### 8. Logo imports (variable names only)
- Rename import aliases `ghsLogo` → `wsLogo` and `ghsLogoFooter` → `wsLogoFooter` in Header.tsx and Footer.tsx (files still reference the same image assets until new logos are provided)

### Technical Notes
- ~15 files will be modified
- All changes are string replacements — no structural/logic changes
- Checkout URLs change from `checkout.ghs-heizoel.de` to `checkout.ws-heizoel.de`
- Logo image files remain unchanged (user can replace the actual PNG files separately)

