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

## Status der Platzhalter

✅ **Bereits gefüllt** (aus schuettekunst.de übernommen):
- Impressum (`src/pages/impressum.astro`) – Adresse, Telefon, Geschäftsführer, HRB, USt-ID
- Footer (`src/components/Footer.astro`) – Adresse, Telefon, E-Mail
- Danke-Seite (`src/pages/danke.astro`) – Kontakt-Mail

**Kontakt-Mail:** Die gesamte Site nutzt `info@schuettekunst.de` (im Impressum
festgelegt — die auf der Hauptseite gepflegte `info@kunstauktionshaus-leipzig.com`
wird hier bewusst nicht verwendet).

### Noch zu erledigen vor Go-Live

#### 1. Web3Forms Access Key
- Datei: `src/components/EstimateForm.astro`, Platzhalter: `WEB3FORMS_ACCESS_KEY_PLATZHALTER`
- Vorgehen: Auf [web3forms.com](https://web3forms.com) mit `info@schuettekunst.de` registrieren, Key kopieren, einsetzen. Kostenlos.

#### 2. Google Tag Manager Container-ID
- Datei: `src/components/CookieBanner.astro`, Platzhalter: `GTM-XXXXXXX`
- Vorgehen: In GTM einen Container für `schaetzung.schuettekunst.de` anlegen, ID dort eintragen. GTM wird erst nach Cookie-Consent geladen (Consent Mode V2 bereits konfiguriert).

#### 3. Datenschutzerklärung anwaltlich prüfen lassen
- Datei: `src/pages/datenschutz.astro`
- Der aktuell hinterlegte Text ist ein **strukturierter Entwurf** auf Basis der DSGVO-Anforderungen für Web3Forms + GTM + Google Analytics + Google Ads. Die Datenschutzerklärung der Hauptseite war hierfür nicht ausreichend.
- **Vor Go-Live muss ein DSGVO-Anwalt drüberschauen.**
- Den orange-hinterlegten Hinweis-Block am Seitenanfang nach Prüfung entfernen.

#### 4. Bilder
Verzeichnis: `public/images/`
- `hero.jpg` – Hero-Bild (Auktionssaal oder Kunstwerk)
- `team.jpg` – Team/Experten-Bild
- `results/*.jpg` – 9 Werke, Dateinamen siehe [public/images/results/README.md](public/images/results/README.md)
- Empfohlene Specs: JPG, max. 200 KB, mind. 1200 px Breite
- Solange Bilder fehlen, zeigt die Site automatisch beschriftete Platzhalter — Funktionsfähigkeit ist nicht eingeschränkt.

#### 5. Favicon (optional)
Datei: `public/favicon.svg` — aktuell schlichtes „S" in Markenfarben.

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
