# Gi Village — Supporting Solutions for Doors and Windows

Corporate product website for **Foshan Jicun Home Delivery Technology Co., Ltd** (Gi Village), built as a static site modeled on the information architecture of [alumasc.co.uk](https://www.alumasc.co.uk/).

## Products (8 families)

1. External Window Sill Panel — CTB series
2. External Window Cover — WCT series
3. Internal Window Cover — NCT series
4. Internal Window Sill Panel — NCT-IZ / NCT-HZ series
5. Aluminium Alloy Coping — YD series
6. Drip Line
7. Glass Balustrade
8. Minimalist Canopy

All content extracted from the official 23-page product documentation (image-based PDF, OCR-processed).

## Tech

- Pure static HTML + CSS + JS (no build step, no dependencies)
- Google Fonts: Poppins (headings) + Arimo (body)
- Palette: `#2a2f6e` navy / `#008e39` green (Alumasc-inspired)

## Local preview

```bash
cd G:\GiVillage-Website
python -m http.server 8321
# open http://127.0.0.1:8321/
```

## Structure

```
index.html          Home
products.html       Product overview
about.html          Company
contact.html        Contact + enquiry form
products/*.html     8 product detail pages
css/style.css       Styles
js/main.js          Interactions (nav, form, lightbox)
images/             Optimized page scans & banners
```
