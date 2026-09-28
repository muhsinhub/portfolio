# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of small and local businesses (pizzeria, café, dental clinic, a
modest-swimwear brand) who need a credible web presence but have no in-house
design or development. They arrive skeptical, comparing options, deciding whether
to trust this developer with their business's first real website.

Secondary: the developer themselves (brand "brownbuilds" / Muhsin) uses this site
as the artifact they send to prospects and link from social profiles to win their
first paid clients.

## Product Purpose

A single-page personal portfolio that showcases the developer's real, deployed
builds and converts a visiting business owner into an enquiry. Success = the
visitor trusts the work and sends a message (Formspree) or emails directly.

## Positioning

A hands-on independent developer who ships *real, live* small-business sites — not
mockups or templates. Every featured project is a deployed URL the visitor can
open and click through. The pitch is proof-by-artifact, not claims.

## Operating Context

Visitors land from a shared link (DM, Instagram bio, direct send), often on a
phone. They skim: is this real, is it good, can I afford to ask. The site must
make its case in the first viewport and give a frictionless way to make contact.

## Capabilities and Constraints

- Next.js (App Router, React 19) + plain CSS Modules. No TypeScript, no Tailwind.
- Global styles in `styles/globals.css`; per-component `*.module.css`.
- Fonts via `next/font/google` exposed as CSS variables.
- Deployed on Vercel (live: brownbuildsportfolio.vercel.app), repo GitHub
  `muhsinhub/portfolio`. Must stay on Next 16.x.
- Single page, anchor-scroll sections: Hero, Work, About, Services, FAQ, Contact.
- Contact form posts to Formspree endpoint `https://formspree.io/f/xbglonyp`.

## Brand Commitments

- Name / wordmark: **brownbuilds** (lowercase).
- Contact email: muhsinbrown1@gmail.com.
- Social: Instagram @muhsinbrownn. (GitHub link intentionally removed; no
  LinkedIn.)
- Do NOT surface the tech stack ("Next.js") on the work cards — the client
  audience doesn't care and it was explicitly removed.
- Standing visual preference (chosen 2026-09-28): a refined dark-modern
  aesthetic executed to a high craft bar, benchmarked against **Vercel**
  (vercel.com) — near-black ground, sharp geometric sans, high contrast,
  confident whitespace, crisp minimal gradients used sparingly. Play the
  convention straight at full fidelity; no gimmicks or ironic quirk.

## Evidence on Hand

Four real, deployed builds, each with a screenshot in `public/work/` and a live URL:
- **Bella's Pizza** — wood-fired pizzeria — https://bellas-pizza-nine.vercel.app/
- **Clearwater Dental** — dental clinic with multi-step booking — https://clearwaterdental.vercel.app/
- **Sunday Coffee** — neighbourhood café — https://sunday-coffee-demo.vercel.app/
- **Accentuate** — modest swimwear & activewear brand (built for the developer's
  mother), marked "In progress" — https://accentuate-demo.vercel.app/

No testimonials, client names, metrics, pricing, or years-of-experience exist yet —
future work must not fabricate them.

## Product Principles

1. Proof over claims — every project is a live, clickable, deployed site.
2. Speak to the business owner, not to developers — plain language, no jargon.
3. Make contact effortless — visible email + one-tap form, low commitment.
4. Look established — a small independent should read as trustworthy and current.
5. Mobile-first — most visitors arrive from a phone link.

## Accessibility & Inclusion

Honor `prefers-reduced-motion` (the site uses animated backgrounds and scroll
reveal). Maintain legible contrast on dark surfaces and keyboard-operable nav,
form, and FAQ disclosure.
