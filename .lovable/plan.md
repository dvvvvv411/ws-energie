

# Neue "Bestellstatus"-Seite mit Rechnungs- & Bankdaten-Anzeige

## Überblick

Neue Seite `/bestellstatus` in der Navbar, auf der Kunden per Bestellnummer + PLZ ihre Rechnung, Bankdaten und Gesamtpreis einsehen können. Die `branding_id` (`1346162f-bb85-4d94-9652-939a7a1794c6`) wird automatisch mitgesendet.

## Änderungen

### 1. Neue Seite `src/pages/Bestellstatus.tsx`

**Eingabe-Zustand** (Formular):
- Zwei Felder: Bestellnummer + PLZ
- "Bestellung abfragen"-Button
- Fehlerbehandlung mit spezifischen Meldungen (400/404/500)

**Erfolgs-Zustand** (Bestellbestätigung):
- **Card 1 — Gesamtpreis**: `total_amount` in EUR, darunter enthaltene MwSt. (Gesamtbetrag × 0.19 / 1.19, als "inkl. X € MwSt."), plus Hinweis "Kostenlose Lieferung"
- **Card 2 — Bankdaten**: Kontoinhaber, IBAN, BIC, Bankname — alle in gleicher Textgröße. Deutlicher Hinweis: "Bitte überweisen Sie den Betrag an folgende Bankverbindung"
- **Card 3 — Rechnung PDF**: Großes PDF-Thumbnail/Preview-Bereich + Download-Button, der die PDF direkt herunterlädt (via `fetch` → `blob` → `a.download`), kein neuer Tab
- Bestellnummer wird oben angezeigt

Layout im gleichen Stil wie die anderen Seiten (Header, Footer, Helmet SEO).

### 2. `src/components/Header.tsx` — Nav-Link hinzufügen

Neuen Eintrag `{ to: '/bestellstatus', label: 'Bestellstatus' }` in beide Nav-Arrays (Desktop + Mobile).

### 3. `src/App.tsx` — Route hinzufügen

```
import Bestellstatus from "./pages/Bestellstatus";
<Route path="/bestellstatus" element={<Bestellstatus />} />
```

### 4. API-Aufruf

```typescript
const response = await fetch(
  "https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/get-invoice-by-order",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order_number: orderNumber,
      zip_code: zipCode,
      branding_id: "1346162f-bb85-4d94-9652-939a7a1794c6"
    })
  }
);
```

### 5. PDF-Download (direkt, kein neuer Tab)

```typescript
const downloadPdf = async (url: string) => {
  const res = await fetch(url);
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Rechnung-${orderNumber}.pdf`;
  a.click();
  URL.revokeObjectURL(a.href);
};
```

### 6. MwSt.-Berechnung

Netto = `total_amount / 1.19`, MwSt. = `total_amount - netto` — wird als "inkl. X,XX € MwSt. (19%)" angezeigt, nicht aufaddiert.

