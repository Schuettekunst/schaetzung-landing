# Schätzung Landing Page – Schütte Kunstauktionen

Conversion-optimierte Single-Page-Landing für kostenlose Kunstschätzung. Zielgruppe: Erben, Sammler und Privatverkäufer mit hochwertigen Gemälden, Grafiken und Skulpturen.

Live-Domain (geplant): `https://schaetzung.schuettekunst.de`

## Tech-Stack

- **Astro 5** (static output)
- **Tailwind CSS 3** (über `@astrojs/tailwind`)
- **Web3Forms** als Form-Backend (kein eigenes Backend nötig)
- **Google Tag Manager** Consent-Mode-V2-kompatibel (Cookie-Banner)

## Installation & Entwicklung

```bash
npm install
npm run dev
```

Dev-Server läuft dann auf `http://localhost:4321`.

Produktions-Build:

```bash
npm run build
npm run preview
```

Der gebaute Static-Output liegt unter `dist/` und kann auf jedem Static-Hoster ausgeliefert werden.

## Noch zu füllende Platzhalter (vor Go-Live)

### 1. Web3Forms Access Key
Datei: `src/components/EstimateForm.astro`
Platzhalter: `WEB3FORMS_ACCESS_KEY_PLATZHALTER`
Vorgehen: Auf [web3forms.com](https://web3forms.com) mit `info@schuettekunst.de` registrieren, Key kopieren, im Form-Hidden-Field eintragen. Kostenlos.

### 2. Google Tag Manager Container-ID
Datei: `src/layouts/Base.astro` und `src/components/CookieBanner.astro`
Platzhalter: `GTM-XXXXXXX`
Vorgehen: In GTM einen Container für `schaetzung.schuettekunst.de` anlegen, ID an beiden Stellen ersetzen.

### 3. Kontaktdaten im Footer
Datei: `src/components/Footer.astro`
Platzhalter: `[Platzhalter Adresse]`, `[Platzhalter Telefon]`
Vorgehen: Vollständige Adresse + Telefonnummer eintragen.

### 4. Impressum & Datenschutz
Dateien: `src/pages/impressum.astro`, `src/pages/datenschutz.astro`
Vorgehen: Impressum von schuettekunst.de übernehmen oder neu erstellen. Datenschutzerklärung **muss vom Anwalt geprüft werden** – wichtige Punkte:
- Web3Forms als Auftragsverarbeiter
- Google Tag Manager / Google Analytics / Google Ads
- Cookies (Consent-Mode V2)
- Speicherung der Schätzungsanfragen (inkl. Foto-Uploads)

### 5. Bilder
Verzeichnis: `public/images/`
- `team.jpg` – Bild des Teams oder eines Experten (für About-Sektion)
- `hero.jpg` – Hochwertiges Hero-Bild (Auktionssaal oder Kunstwerk)
- `results/*.jpg` – 9 Werke (Dateinamen siehe `public/images/results/README.md`)

Empfohlene Bild-Specs: JPG, max. 200 KB pro Bild, Breite mind. 1200 px.

### 6. Favicon
Datei: `public/favicon.svg`
Aktuell ist nur ein simples Platzhalter-SVG hinterlegt – ggf. durch Markenlogo ersetzen.

## Conversion-Tracking (Google Ads)

Das Tracking läuft über GTM mit zwei dataLayer-Events:

| Event | Wann | Verwendung |
|---|---|---|
| `lead_submitted` | Klick auf Submit-Button im Formular | Backup-Signal, frühes Funnel-Event |
| `lead_thankyou_view` | Aufruf der Danke-Seite nach Submit | **Haupt-Conversion** für Google Ads |

In GTM zwei Custom Event Triggers anlegen, dann je einen Google-Ads-Conversion-Tag (oder GA4-Event) darauf feuern lassen.

## Deployment

**Empfehlung: Vercel**

```bash
npm install -g vercel
vercel
```

Astro wird automatisch erkannt. Subdomain `schaetzung.schuettekunst.de` im Vercel-Dashboard verknüpfen und CNAME-Record beim DNS-Anbieter setzen.

Alternativen: Netlify, Cloudflare Pages, jeder Static-Hoster.

## Struktur

```
src/
├── layouts/Base.astro       # HTML-Hülle, Meta, GTM-Slots
├── pages/
│   ├── index.astro          # Single-Page-Landing
│   ├── danke.astro          # Conversion-Page
│   ├── impressum.astro
│   └── datenschutz.astro
├── components/
│   ├── Hero.astro
│   ├── TrustStrip.astro
│   ├── Results.astro
│   ├── Process.astro
│   ├── About.astro
│   ├── EstimateForm.astro
│   ├── FAQ.astro
│   ├── FinalCTA.astro
│   ├── Footer.astro
│   └── CookieBanner.astro
└── styles/global.css        # Tailwind-Layer + Komponenten-Klassen

public/
├── favicon.svg
└── images/
    ├── team.jpg
    ├── hero.jpg
    └── results/             # 9 Auktions-Ergebnis-Bilder
```
