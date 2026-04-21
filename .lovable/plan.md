

# Preisrechner-API umstellen auf neuen `create-checkout-session` Endpoint

## Neue API-Spezifikation

**Endpoint:** `POST https://jpielhyfzzznicvcanci.supabase.co/functions/v1/create-checkout-session`
**Branding-ID:** `9290eb97-73be-4c7b-9669-4ba2aad1a986`
**Checkout-Domain:** `https://checkout.antpiregmbh.de/?token={checkout_token}`

## Request-Body (neu)

```json
{
  "brandingId": "9290eb97-73be-4c7b-9669-4ba2aad1a986",
  "products": [
    { "name": "1.500 Liter Standard Heizöl", "gross_price": 1950.00, "quantity": 1 }
  ],
  "shipping_cost": 0
}
```

**Produktname-Logik:**
- Standard: `"{liters mit Tausendertrennung} Liter Standard Heizöl"` (z.B. `"1.500 Liter Standard Heizöl"`)
- Premium: `"{liters mit Tausendertrennung} Liter Premium Heizöl"` (z.B. `"2.000 Liter Premium Heizöl"`)
- `quantity` immer `1`
- `gross_price` = `liters × pricePerLiter` (Bruttopreis gesamt)
- `shipping_cost` = `0`

**Response-Handling:** Token aus `data.checkout_token` lesen (vorher `data.token`). Redirect zu `https://checkout.antpiregmbh.de/?token=${checkout_token}`.

## Betroffene Dateien (3×)

Jeweils `handleOrder` umbauen — alte Felder (`product`, `liters`, `shop_id`, `total_amount`, `delivery_fee`, `price_per_liter`) entfernen, neue Struktur senden, Token-Feldnamen anpassen, alte `shopId`-Konstante entfernen:

1. **`src/components/PriceCalculator.tsx`**
2. **`src/components/HorizontalPriceCalculator.tsx`**
3. **`src/components/MobilePriceCalculator.tsx`**

## Helper-Logik (in jedem Calculator)

```ts
const productName = `${litersNum.toLocaleString('de-DE')} Liter ${
  oilType === 'standard_heizoel' ? 'Standard' : 'Premium'
} Heizöl`;

const requestBody = {
  brandingId: "9290eb97-73be-4c7b-9669-4ba2aad1a986",
  products: [{ name: productName, gross_price: parseFloat(totalAmount.toFixed(2)), quantity: 1 }],
  shipping_cost: 0
};

const res = await fetch("https://jpielhyfzzznicvcanci.supabase.co/functions/v1/create-checkout-session", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(requestBody)
});
const { checkout_token } = await res.json();
window.location.assign(`https://checkout.antpiregmbh.de/?token=${checkout_token}`);
```

Fehler-Toast bleibt mit E-Mail `info@antpiregmbh.de`.

