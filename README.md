# PHYS221-Portfolio

**A Semester in Motion** — an interactive static site for my PHYS 221 (Classical Mechanics) portfolio. Mostly an excuse to play around with Claude Design.

A cover letter, plus six selected problems & activities. Each work is a 3D-tiltable card paired with a written reflection; multi-page works flip through a carousel.

## Run it

It's a static site — open `index.html` directly, or serve the directory:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Layout

- `index.html` — page markup (hero, cover letter, works intro, colophon, footer)
- `styles.css` — design tokens, layout, the 3D tilt effect on `.carousel-stage`
- `works.js` — vanilla JS that renders the six work sections into `#works-root`
- `assets/works/*.png` — annotated PDF page exports referenced by `works.js`
- `assets/portfolio.pdf` — the original handwritten portfolio PDF

## Adding a work

Append an entry to the `WORKS` array in `works.js`:

```js
{
  id: 'my-work',           // anchor for the section
  num: '07',
  kind: 'Homework #N · Q?',
  title: 'Short Title',
  subtitle: 'One-line tease.',
  tags: ['kinematics', 'whatever'],
  images: ['my-work-1', 'my-work-2'],   // → assets/works/my-work-1.png, …
  narrative: 'optional italic label',
  body: [
    { type: 'p',         text: '…' },
    { type: 'pullquote', text: '…' },   // optional callout
  ],
}
```

Sections alternate sides automatically (odd-indexed entries flip).

## Credit

Designed in [Claude Design](https://claude.ai/design); ported to a hand-written static site.
