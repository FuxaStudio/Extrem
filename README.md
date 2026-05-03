# Svídnický Extrém — web

Statický web spolku Svídnický Extrém, překážkového sportu ve Svídnici, Pardubický kraj.

## Struktura

```
/
├── index.html          — úvodní stránka
├── treninky.html       — tréninky
├── zavody.html         — závody
├── akce.html           — akce a události
├── galerie.html        — přehled galerie
├── galerie-detail.html — galerie: Vítání prázdnin
├── galerie-deti.html   — galerie: Extrém Děti
├── galerie-tabor.html  — galerie: Letní tábor
├── galerie-trenink.html— galerie: Tréninky
├── kontakt.html        — kontakt
├── assets/
│   ├── shared.css      — sdílené styly
│   ├── shared.js       — navigace, patička, utility
│   └── Images/         — fotky a videa (není v gitu — viz .gitignore)
└── .claude/            — konfigurace Claude Code pro budoucí úpravy
```

## Spuštění lokálně

Otevřít `index.html` přímo v prohlížeči, nebo spustit lokální server:

```bash
npx http-server . -p 8080
```

## Deploy — GitHub Pages

1. Repozitář → Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `main`, složka: `/ (root)`
4. Uložit — web bude dostupný na `https://<username>.github.io/<repo>/`

## Mediální soubory

Složka `assets/Images/` je vyloučena z Gitu (3,3 GB). Spravovat odděleně.
