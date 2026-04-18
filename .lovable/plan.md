
Generiere ein neues Favicon: Buchstabe "A" in Brandingfarbe (#10b981 / Emerald-Green Gradient) auf **transparentem** Hintergrund, ersetze das aktuelle `/favicon.png`.

## Schritte

1. **Generieren** mit Nano Banana (`google/gemini-2.5-flash-image`):
   - Prompt: "A bold modern letter 'A' logo, emerald green gradient (#10b981 to #34d399), clean geometric sans-serif, centered, fully transparent background (no white, no color fill behind), square 512x512, app icon style, sharp edges, no shadow"
   - Modalities: `["image", "text"]`
2. **Speichern** als `public/favicon.png` (überschreibt das alte).
3. **Alte `public/favicon.ico`** falls vorhanden löschen (Browser priorisieren `/favicon.ico` sonst).
4. **`index.html`** bleibt unverändert (referenziert bereits `/favicon.png`).
5. **QA**: Bild öffnen, prüfen dass Hintergrund wirklich transparent ist (Alpha-Kanal vorhanden) und das "A" klar erkennbar in Brandingfarbe.
