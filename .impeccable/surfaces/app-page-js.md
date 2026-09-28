---
version: 1
slug: "app-page-js"
primary_target: "app/page.js"
related_targets: ["components/Navbar.js","components/Footer.js","styles/globals.css"]
---

# Surface: brownbuilds portfolio (single page)

Scope: the whole single-page portfolio (Hero, Work, About, Services, FAQ, Contact) + Navbar + Footer.
Visitor mode: **Persuade** — a small-business owner deciding whether to trust brownbuilds with their first real website.
Audience/job: non-technical local-business owner, often on a phone, skimming for proof and a low-friction way to enquire.
Action: send an enquiry (Formspree form) or email; secondary: open a live build.
Proof/content: four real, deployed builds with screenshots + live URLs (Bella's Pizza, Clearwater Dental, Sunday Coffee, Accentuate — Accentuate "In progress"). No testimonials/metrics exist; do not fabricate.
Constraints: Next.js 16 App Router + plain CSS Modules, Vercel, dark aesthetic pinned, keep all copy + section structure, wordmark lowercase "brownbuilds".

## Direction contract

THESIS: The idea this surface owns — proof by artifact, delivered with the calm confidence of a modern product company, not a flashy "creative dev" portfolio. It refuses the category default it currently is: animated aurora blobs, glassmorphism, multi-hue gradient text, decorative glow. Confidence comes from restraint and precision, not effects.

OWN-WORLD: Near-black ground (#08080a-ish), one warm off-white ink, a single quiet mid-gray for secondary text, and ONE restrained accent used sparingly (not a rainbow gradient). Sharp geometric grotesk display (e.g. a real grotesk, not Inter-as-display) + a clean neutral body face. Hairline 1px borders at low opacity, generous whitespace, tight optical letter-spacing on large type, tabular precision. Components: flat matte cards with a single hairline and a barely-there hover lift; crisp small-caps/mono kickers; a subtle top-lit radial only, no drifting blobs. Recognizable with content removed: black, one ink, one accent, hairlines, big confident grotesk, lots of air.

STORY: Visitor understands in one viewport that brownbuilds ships real, live small-business sites; believes it because every project is a clickable deployed URL presented cleanly; acts by sending the short enquiry or emailing.

FIRST VIEWPORT: Minimal fixed nav (lowercase wordmark left, sparse links + one solid accent CTA right). Hero is left-aligned or centered but SPACIOUS: a small status pill ("Available for new projects"), one large confident grotesk headline (2 lines max, tight tracking, one phrase in the single accent — flat, not animated gradient), a one-line sub in muted ink, then two buttons (solid accent primary "See my work", hairline-ghost secondary "Get in touch"). No animated background behind it — only a faint static top glow. Primary action visible above the fold.

FORM: Standing-exit canon (refined dark-modern), executed at full fidelity to the Vercel craft bar. Not a dealt challenger; chosen by the user over the assigned "Storefront" direction. Seed key 46b5cd6d, mode persuade.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
