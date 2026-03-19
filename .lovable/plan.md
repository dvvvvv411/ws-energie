

# Meta-Tags & verbleibende GHS-Referenzen korrigieren

## Noch zu ändernde Dateien

### 1. Services.tsx (Zeile 15)
- Title: `GHS Heizöl` → `WS Energie`

### 2. Products.tsx (Zeile 16)
- Title: `GHS Heizöl` → `WS Energie`

### 3. index.html
- Meta description und keywords: sicherstellen, dass `WS Energie` verwendet wird (bereits korrekt laut vorheriger Änderung)

### 4. ReviewsSection.tsx (Zeilen 10, 45)
- `GHS Heizöl` → `WS Energie` in Bewertungstexten

### 5. BenefitsSection.tsx (Zeile 64)
- `GHS Heizöl` → `WS Energie`

### 6. Logo-Import-Pfade (nicht umbenennen, nur Referenz-Konsistenz)
- Header.tsx und Footer.tsx importieren noch `ghs-logo.png` / `ghs-logo-footer.png` — Variable-Aliase sind bereits umbenannt, Dateipfade bleiben bis Logo-Austausch

Insgesamt 5 Dateien mit einfachen String-Ersetzungen.

