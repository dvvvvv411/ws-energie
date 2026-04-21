

# Vite-Konfiguration: Host `antpiregmbh.de` erlauben

## Problem
Vite blockiert Requests von der Domain `antpiregmbh.de`, da sie nicht in `server.allowedHosts` konfiguriert ist. Fehlermeldung:
> Blocked request. This host ("antpiregmbh.de") is not allowed.

## Lösung

**`vite.config.ts` anpassen** — `allowedHosts` zum `server`-Block hinzufügen:

```ts
server: {
  host: "::",
  port: 8080,
  allowedHosts: ["antpiregmbh.de", ".antpiregmbh.de", ".lovable.app", ".lovableproject.com"],
},
```

**Erklärung:**
- `"antpiregmbh.de"` — erlaubt die Hauptdomain
- `".antpiregmbh.de"` — erlaubt alle Subdomains (z.B. `www.`, `checkout.`)
- `".lovable.app"` / `".lovableproject.com"` — Preview-/Sandbox-Hosts bleiben funktionsfähig

Keine weiteren Dateien betroffen.

