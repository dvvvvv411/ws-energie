

# Komplettes Rebranding: WS-Energie → Antpire GmbH

## Neue Stammdaten (überall ersetzt)

| Alt | Neu |
|---|---|
| WS-Energie Verwaltungs-GmbH | **Antpire GmbH** |
| Mittlere Bleiche 26, 55116 Mainz | **Franz-Sigel-Str. 20, 68753 Waghäusel** |
| HRB 43804, Amtsgericht Mainz | **HRB 740142, Amtsgericht Mannheim** |
| DE369810911 | **DE455291518** |
| info@ws-heizoel.de | **info@antpiregmbh.de** |
| 06131-8888965 / Telefon | **komplett entfernt** |
| Geschäftsführer (fehlt) | **Michael Weyrauch** (im Impressum hinzufügen) |
| 2013 / 12 Jahre Erfahrung | **2021 / 4 Jahre Erfahrung** |
| 2016 (BenefitsSection) | **2021** |
| Logo-Bilder (ghs-logo) | **Text-Logo "Antpire" in Brandingfarbe** |
| checkout.ws-heizoel.de | **checkout.antpiregmbh.de** |

## Änderungen pro Datei

### Logo → Antpire Textlogo
**Neue Komponente** `src/components/AntpireLogo.tsx` — gradientes Textlogo "Antpire" mit Tailwind in Brandingfarbe (primary/accent-orange gradient), Größen-Prop für unterschiedliche Anwendungen.

- **`Header.tsx`**: `<img wsLogo>` (2×) → `<AntpireLogo>`. Top-Bar: Telefonzeile + Phone-Import entfernen, nur E-Mail bleibt → `info@antpiregmbh.de`.
- **`Footer.tsx`**: `<img wsLogoFooter>` → `<AntpireLogo>`. Phone-Block + Import entfernen. Adresse, Firmenname, E-Mail aktualisieren. "12 Jahren" → "4 Jahren".
- **`MobileHeader.tsx`**: Logo-`<img>` → `<AntpireLogo>`. Mailto + alt-Text aktualisieren.

### Preisrechner (Checkout-Domain)
- **`PriceCalculator.tsx`**, **`HorizontalPriceCalculator.tsx`**, **`MobilePriceCalculator.tsx`**:
  - `checkout.ws-heizoel.de` → `checkout.antpiregmbh.de`
  - Toast-Meldungen: `info@ws-heizoel.de` → `info@antpiregmbh.de`

### Rechtstexte
- **`Impressum.tsx`**: Firma, Adresse, HRB, Registergericht, USt-IdNr., E-Mail aktualisieren. **Telefon-Block + Phone-Icon-Import entfernen**. Neuer Block **"Geschäftsführer: Michael Weyrauch"**. Helmet title/description.
- **`Datenschutz.tsx`**: Verantwortlicher (Name + Adresse), Kontakt-E-Mail, Helmet.
- **`AGB.tsx`**: Firma + Anschrift im Geltungsbereich, Helmet.
- **`Widerrufsrecht.tsx`**: Anschrift in Widerruf-Erklärung, Kontakt-Block, Muster-Formular ("An: …"), Helmet.

### Content-Seiten / Komponenten
- **`AboutUs.tsx`**: Helmet, Hero-Headline ("Über Antpire GmbH"), "Seit 2013" → "Seit 2021", "12 Jahre" → "4 Jahre", Mainz → Waghäusel, E-Mail-Button, Kontaktdetails-Card (Adresse/HRB/USt-IdNr./Geschäftsführer hinzufügen), Telefon-Anzeige falls vorhanden entfernen, Animation-Target `years: 12 → 4`.
- **`CompanySection.tsx`**: Stat "2013" → "2021", "12 Jahre Erfahrung" → "4 Jahre Erfahrung", Story-Text (Mainz → Waghäusel, Jahreszahlen), `alt`-Attribut.
- **`HeroSection.tsx`**: "Heizöl-Experte seit über 12 Jahren" → "seit 2021", "über 12 Jahre Erfahrung" → "über 4 Jahre Erfahrung", "Über 100.000" Kunden-Behauptung anpassen falls gewünscht (wird auf "Viele zufriedene Kunden" reduziert da Zeitraum kürzer — **Frage: behalten oder reduzieren?** → ich lasse Zahl bestehen, nur Zeitraum ändern).
- **`BenefitsSection.tsx`**: "Über 20 Jahre Erfahrung" → "Seit 2021 zuverlässig", "seit 2016" → "seit 2021".
- **`ReviewsSection.tsx`**: "WS Energie" Erwähnungen in Review-Texten → "Antpire".
- **`ServiceContact.tsx`**: E-Mail aktualisieren.
- **`Bestellstatus.tsx`**: Falls E-Mail/Branding-Texte vorhanden → aktualisieren.

### SEO / Meta (alle Seiten)
- **`index.html`**: title, meta description, og:title, og:description, og:url falls gesetzt.
- Alle `<Helmet>`-Blöcke (`Index`, `Products`, `Services`, `AboutUs`, `Impressum`, `Datenschutz`, `AGB`, `Widerrufsrecht`, `Bestellstatus`, `DesignSystem`): "WS Energie" / "WS-Heizöl" → "Antpire", Adresse Mainz → Waghäusel.

### Aufräumen
- `Phone`-Imports aus `Header.tsx`, `Footer.tsx`, `Impressum.tsx` entfernen.
- Logo-Asset-Imports (`wsLogo`, `wsLogoFooter`) entfernen — alte PNG-Dateien bleiben im Repo (nicht gelöscht, nur unreferenziert).

## Branding-Farbe Logo
"Antpire" als Wortmarke mit `gradient-text-premium` Klasse (existiert bereits in `index.css`) oder `text-primary-600` mit `font-bold tracking-tight`. Skalierbar per `size`-Prop (`sm`/`md`/`lg`).

