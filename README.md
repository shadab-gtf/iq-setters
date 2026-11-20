# iq-setters

Marketing site for IQ Setters — a lead and follow-up workspace for real estate teams.

Built with Next.js (App Router), React, Framer Motion and Lenis smooth scrolling.
The site lives in [`next-app/`](next-app/).

```bash
cd next-app
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender
npm start
```

See [`next-app/README.md`](next-app/README.md) for the component layout, the
styling rules and how the motion layer is put together.

## History

This started as a static site (`index.html`, `styles.css`, `home-sections.css`,
`app.js`, `assets/`) and was ported to Next.js with reusable components, with the
GSAP motion layer rebuilt in Framer Motion. The port was verified pixel-identical
to that static build at 1440, 1120, 768 and 390px before the original files were
removed.

If you ever need the original as a visual reference, it is still in git history:

```bash
git show <commit>:index.html      # e.g. 284b295, the last static-only commit
git checkout <commit> -- index.html styles.css home-sections.css app.js assets
```
