

# Checkout-URL anpassen: `/?token=` → `/checkout?token=`

## Änderung

In allen 3 Preisrechner-Komponenten die Redirect-URL anpassen:

**Vorher:** `https://checkout.antpiregmbh.de/?token=${checkout_token}`
**Nachher:** `https://checkout.antpiregmbh.de/checkout?token=${checkout_token}`

## Betroffene Dateien

1. **`src/components/PriceCalculator.tsx`** — `handleOrder`-Funktion
2. **`src/components/HorizontalPriceCalculator.tsx`** — `handleOrder`-Funktion
3. **`src/components/MobilePriceCalculator.tsx`** — `handleOrder`-Funktion

Keine weiteren Logik-Änderungen.

