---
name: brownbuilds
description: A refined dark-modern portfolio that pitches a solo developer's real, deployed small-business sites.
colors:
  ink-black: "#08080a"
  surface-black: "#0d0d10"
  surface-raised: "#121216"
  surface-hover: "#16161b"
  hairline: "rgba(255,255,255,0.08)"
  hairline-strong: "rgba(255,255,255,0.16)"
  ink: "#f4f4f6"
  ink-dim: "#b4b4be"
  ink-muted: "#8a8a95"
  signal-blue: "#3b82f6"
  signal-blue-hover: "#5b9bff"
  status-green: "#3ecf8e"
  status-amber: "#f0b24a"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 7.5vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.66rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  card:
    backgroundColor: "{colors.surface-black}"
    rounded: "{rounded.md}"
    padding: "1.4rem 1.5rem 1.6rem"
  input:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.72rem 0.85rem"
  nav-cta:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.05rem"
---

# Design System: brownbuilds

## Overview

**Creative North Star: "The Night Showroom"**

brownbuilds is a near-black room where the work is the light. The interface is
deliberately quiet — deep ink ground, hairline edges, a single confident
grotesk, and generous air — so the only saturated thing on screen is the work
itself: real, deployed client sites shown at full brightness inside flat cards.
The confidence comes from restraint, not effects. Nothing glows, nothing
gradients, nothing drifts.

The register is calm and professional, benchmarked against Vercel-class product
marketing: high contrast, precise type, decisive whitespace, and motion used
once and gently rather than scattered everywhere. It is a pitch surface for a
skeptical small-business owner, so every element earns trust by being plain and
exact — proof by artifact, not by adjectives.

This world is an explicit rejection of the "creative developer" default it
replaced: animated aurora blobs, glassmorphism, multi-hue gradient text, and
neon glow. Those read as decoration; this reads as a studio.

**Key Characteristics:**
- Near-black ground, never pure black; flat matte surfaces, never glass.
- One restrained blue accent, used sparingly for action and emphasis.
- Geist grotesk throughout; big, tightly-tracked headlines.
- Hairline 1px borders and lots of air instead of boxes and shadows.
- Client screenshots are the only rich colour on the page.

## Colors

A monochrome dark palette carried almost entirely by one ink and one accent; the
work supplies the rest.

### Primary
- **Signal Blue** (#3b82f6): the single accent. Primary buttons, the nav CTA, the
  emphasised phrase in the hero headline, card "Visit site" links, FAQ open-state
  icon, and focus rings. Used on a small fraction of any screen — its rarity is
  the point.
- **Signal Blue Hover** (#5b9bff): the lift on hover for accent surfaces only.

### Secondary
- **Status Green** (#3ecf8e): reserved for the "Available for new projects"
  presence dot. A functional status colour, never decoration.
- **Status Amber** (#f0b24a): reserved for the "In progress" project tag. A
  functional status colour, never decoration.

### Neutral
- **Ink Black** (#08080a): the page ground and input fields.
- **Surface Black** (#0d0d10): flat card and panel fills, one step above ground.
- **Surface Raised** (#121216) / **Surface Hover** (#16161b): thumbnail wells and
  ghost-button hover.
- **Ink** (#f4f4f6): primary text and headings.
- **Ink Dim** (#b4b4be): lead paragraphs and hero sub-copy.
- **Ink Muted** (#8a8a95): secondary body, captions, nav links at rest, form labels.
- **Hairline** (rgba(255,255,255,0.08)) / **Hairline Strong** (rgba(255,255,255,0.16)):
  all borders and dividers.

**The One Voice Rule.** Signal Blue is the only decorative colour on the page.
Green and amber appear only as status signals at a few pixels each. If a screen
has more than one blue region competing for attention, one of them is wrong.

**The No-Gradient Rule.** Emphasis comes from weight, size, or the single flat
accent — never from a gradient. Gradient text and multi-stop backgrounds are
banned outright.

## Typography

**Display Font:** Geist (with system-ui fallback)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (status tags only)

**Character:** Geist is a precise, neutral grotesk with a slightly technical edge
— the same family the craft bar (Vercel) is built on. One family across display
and body keeps the voice unified; only measurement-like status tags switch to the
mono cut.

### Hierarchy
- **Display** (600, clamp(2.7rem–5rem), 1.02, -0.04em): the hero headline only.
- **Heading** (600, clamp(1.9rem–2.7rem), 1.04, -0.035em): section titles.
- **Title** (600, ~1.25rem, -0.02em): card and service titles.
- **Body** (400, 1rem, 1.6, -0.011em): all prose; measures capped ~54–64ch.
- **Label** (500, 0.66rem, +0.05em, uppercase, Geist Mono): status tags only.

**The Tight-Track Rule.** Large type gets negative tracking (down to -0.04em on
display); body stays near -0.01em. Headlines are set tight and confident, not airy.

## Layout

A single centred column, max-width 1080px, 1.5rem side gutters. Sections breathe
at ~112px vertical rhythm (7rem), tightening to ~80px under 560px. The hero fills
~88vh and is vertically centred. Work is a two-column card grid (collapsing to one
column ≤860px); Services is a two-column title|description list separated by
hairlines (stacking ≤860px); FAQ and About are single measured columns; Contact is
a two-column info|form card (stacking ≤860px). More space sits above a heading than
below it. No fixed-pixel grids — columns are fluid `1fr` tracks.

## Elevation & Depth

Flat by default. Depth is conveyed through tonal layering (ground → surface →
raised) and hairline borders, not resting shadows. Shadows appear only as a
response to state or to lift the accent.

### Shadow Vocabulary
- **Accent lift** (`box-shadow: 0 6px 20px -6px rgba(59,130,246,0.5)`): under
  primary buttons and the nav CTA; intensifies on hover.
- **Card hover** (`box-shadow: 0 26px 50px -28px rgba(0,0,0,0.85)`): a soft,
  offset, blurred shadow revealed only when a work card is hovered.

**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a reaction
(hover, action), never ambient furniture. Every shadow carries a real offset and
blur — no zero-blur glows.

## Shapes

Gentle, consistent corners: 12px on cards, panels, and inputs (8px on small
controls), full pills (999px) on buttons and the availability badge. Borders are
always a single 1px hairline on all four sides — never a coloured or thick
one-sided accent border. Icons are drawn SVG in a single 1.5px stroke (the card
arrow, the FAQ plus/close). No clip-path silhouettes, no decorative masks.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Primary:** Signal Blue fill, white text, padding 0.8rem 1.6rem, accent-lift
  shadow.
- **Hover / Focus:** brightens to Signal Blue Hover, rises 2px, shadow deepens;
  focus-visible shows a 2px Signal Blue ring at 3px offset.
- **Ghost:** transparent fill, Ink text, 1px Hairline-Strong border; hover fills
  Surface Hover and brightens the border. Used as the hero's secondary action.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Surface Black with a Hairline border; thumbnail well is Surface
  Raised with a Hairline bottom divider.
- **Shadow Strategy:** flat at rest; Card-hover shadow + Hairline-Strong border +
  4px rise on hover; the whole card is a single link and the screenshot scales 1.035×.
- **Internal Padding:** 1.4rem 1.5rem 1.6rem on the body.

### Inputs / Fields
- **Style:** Ink Black fill, 1px Hairline border, 8px radius, Geist body.
- **Focus:** border shifts to Signal Blue with a 3px Signal-Blue-soft ring; no glow.
- **Labels:** small Ink Muted text above each field (not placeholders).

### Navigation
- **Style:** fixed, translucent Ink-Black bar with a functional 12px backdrop
  blur; gains a Hairline bottom border once scrolled.
- **Typography:** lowercase Geist wordmark with a Signal-Blue period; Ink Muted
  links brightening to Ink on hover; a Signal Blue pill CTA.
- **Mobile:** links collapse into a hamburger that opens a near-opaque full-screen
  overlay with large centred Geist links.

### Status Tag (signature)
Small Geist Mono uppercase pill in Status Amber at ~10% opacity fill with a
matching hairline — the "In progress" marker on unfinished work. The availability
badge pairs an Ink-Dim label with a pulsing Status Green dot.

## Do's and Don'ts

### Do:
- **Do** keep Signal Blue on ≤10% of any screen; let the client screenshots be the colour.
- **Do** convey depth with tonal layers and hairlines; reserve shadows for hover/action.
- **Do** set headlines in Geist at 600 with tight negative tracking.
- **Do** keep green and amber strictly as status signals, a few pixels each.
- **Do** draw icons as single-stroke SVG.

### Don't:
- **Don't** use gradient text or multi-stop gradient backgrounds anywhere.
- **Don't** reintroduce glassmorphism, aurora blobs, or neon glow.
- **Don't** put an eyebrow/kicker above a heading, or number sections 01/02/03.
- **Don't** wrap content in same-size icon+title+text boxes as the page structure.
- **Don't** add a second competing accent colour; the palette is one blue plus neutrals.
