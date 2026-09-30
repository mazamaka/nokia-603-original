# Nokia 603 — interactive design concept

A Russian-language Nokia 603 product-page concept inspired by dark hardware galleries. This independent educational project is not affiliated with Nokia. It does not sell products, collect contact details, accept payments, or send inquiries. Displayed pricing is illustrative.

## Public website

https://mazamaka.github.io/nokia-603-archive/

## Features

- Responsive layouts, studio imagery, product specifications and FAQ.
- Six-color selector, accessible image gallery and configuration preview.
- Reduced-motion support, keyboard navigation and focus-managed dialogs.
- No backend, analytics, tracking, account registration or visitor-data collection.

## Development

Node.js 24 is used for CI.

```sh
npm ci
npm run dev
npm run build
```

For the GitHub project URL:

```sh
PAGES_BASE_PATH=/nokia-603-archive/ npm run build
```

Pushes to `main` build and deploy through GitHub Actions. Enable GitHub Pages with the source set to GitHub Actions.

## Image credits

`hero.webp`, `design.webp`, and `product.webp` are AI-generated visualizations based on archived Nokia 603 references. Hardware and screen details are illustrative. `colors.webp` is an archived Nokia press image via [MT.Today / Mobiltelefon.ru](https://mt.today/cena_nokia_603_v_rossii_sostavit_11_000_rublej!tx7ktl). No blanket open-source license is asserted over third-party images or trademarks.

References: [Nokia launch archive](https://blogs.windows.com/devices/2011/10/13/belle-issimo-nokia-603-launched-today/), [Golem press photographs](https://www.golem.de/1110/87021.html).
