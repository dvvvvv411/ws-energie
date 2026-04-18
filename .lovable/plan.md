

# Heizölpreis global ändern: 0,90€ → 1,30€

## Logik
- **Standard Heizöl: 0,90€ → 1,30€** (+0,40€)
- **Premium Heizöl: 0,93€ → 1,33€** (3-Cent-Aufschlag bleibt)
- Alle anderen Preisanzeigen (Charts, Mengenrabatte, Verlauf) werden um **+0,40€** verschoben, damit Verhältnisse plausibel bleiben.

## Änderungen pro Datei

### Preisrechner (Basispreise)
- **`src/components/PriceCalculator.tsx`** (Z.18–19): `standard_heizoel: 1.30`, `premium_heizoel: 1.33`
- **`src/components/HorizontalPriceCalculator.tsx`** (Z.15–16): identisch
- **`src/components/MobilePriceCalculator.tsx`** (Z.19–20): identisch
- **`src/components/ProductSelector.tsx`** (Z.13, Z.26): `1.30` / `1.33`

### Preisübersicht / Charts
- **`src/components/PriceOverviewSection.tsx`**:
  - Monats-Chart (Z.16–22): alle Werte +0,40 → Jan 1.28/1.31, Feb 1.29/1.32, Mär 1.27/1.30, Apr 1.30/1.33, Mai 1.32/1.35, Jun 1.30/1.33
  - Mengenrabatte (Z.36–39): `1,30€/L`, `1,28€/L`, `1,27€/L`, `1,26€/L`
  - Karten "ab 0,90€" → **"ab 1,30€"** (Z.90), "ab 0,93€" → **"ab 1,33€"** (Z.117)

### Texte
- **`src/components/HeroSection.tsx`** (Z.102): „ab nur 90 Cent pro Liter" → **„ab nur 1,30€ pro Liter"**

### Design-System (Beispieldaten)
- **`src/pages/DesignSystem.tsx`**: `price={0.90}` → `1.30`, `price={0.93}` / `originalPrice={0.98}` → `1.33` / `1.38`, Eco `0.95` → `1.35`

## Geprüft, nicht betroffen
- `HandelsblattBanner.tsx` Treffer sind SVG-Pfade (keine Preise).
- Edge-Function-Aufrufe senden `currentPrice` dynamisch — keine Anpassung nötig.

