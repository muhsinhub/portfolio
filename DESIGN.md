---
name: brownbuilds
description: A neon arcade-console portfolio — a numbered sidebar shell on deep navy, driven by one cyan accent.
colors:
  navy-base: "#03152f"
  navy-panel: "#061d3d"
  navy-raised: "#0a2850"
  navy-sink: "#020e20"
  cyan: "#16d7ff"
  line: "rgba(22,215,255,0.18)"
  line-soft: "rgba(255,255,255,0.07)"
  ink: "#e8f3ff"
  ink-dim: "#9ab4d4"
  ink-mute: "#6a85a8"
typography:
  display:
    fontFamily: "Barlow Condensed, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0.01em"
  heading:
    fontFamily: "Barlow Condensed, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.18em"
rounded:
  none: "0"
  cut: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy-base}"
    rounded: "{rounded.none}"
    padding: "0.62rem 1.4rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.62rem 1.4rem"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.7rem"
  nav-item-active:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy-base}"
  card:
    backgroundColor: "{colors.navy-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem"
  input:
    backgroundColor: "{colors.navy-sink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.8rem"
---

# Design System: brownbuilds

## Overview

**Creative North Star: "The Arcade Console"**

brownbuilds is a numbered control console on a deep-navy screen. The whole site
is a single app-shell: a fixed left sidebar of 01–06 section switches, a central
stage that wipes from one panel to the next, a live clock and a scrolling status
ticker. It reads like the operator panel of an arcade cabinet — bold condensed
caps, monospace readouts, sharp clip-cut corners, and a single electric-cyan
signal that lights whatever is active.

The energy is deliberate and playful, but disciplined: one accent, not a
rainbow. Cyan carries every live/active/interactive cue; everything else is navy
and cool-grey ink. The client screenshots inside the arcana grid are the only
other colour on screen, which keeps the work itself the brightest thing.

It is driven as much by keyboard as mouse (arrows, 1–6, Enter, Esc), narrates
its own state (clock, ticker, availability dot), and offers an opt-in Web Audio
SFX layer — all of it honouring `prefers-reduced-motion`.

**Key Characteristics:**
- Deep-navy ground (#03152f) with one electric-cyan accent (#16d7ff) — no second accent.
- Sidebar app-shell: numbered 01–06 switches, central stage, ticker + clock.
- Barlow Condensed display caps + JetBrains Mono for all body and meta.
- Sharp corners with a 14px clip-cut on cards, buttons, nav items and panels.
- Panels enter with a cyan wipe; motion is scripted, not scattered.

## Colors

A two-tone system: a stack of navies for depth and a single cyan for everything live.

### Primary
- **Cyan** (#16d7ff): the one accent. Active sidebar switch fill, the emphasised
  hero word, every card's top rule, service numbers, the FAQ toggle, the clock,
  the caret, the ticker, button fills, focus states, and all hover glows.

### Neutral
- **Navy Base** (#03152f): the page ground.
- **Navy Panel** (#061d3d): cards, the profile/panel fills, the sidebar top.
- **Navy Raised** (#0a2850) / **Navy Sink** (#020e20): subtle elevation and the
  deepest wells (inputs, thumbnails, sidebar base).
- **Ink** (#e8f3ff): primary text and headings.
- **Ink Dim** (#9ab4d4): body copy, leads, the muted "SECTION 0x / 06" label.
- **Ink Mute** (#6a85a8): quietest meta and numeric labels.
- **Line** (rgba(22,215,255,0.18)) / **Line-soft** (rgba(255,255,255,0.07)):
  cyan-tinted hairlines and neutral dividers.

**The One Signal Rule.** Cyan is the only colour on the interface; it always
means "live / active / here." Reserved neon hues (pink, violet, lime, amber) still
exist as tokens but are intentionally unused — do not reintroduce a per-card
rainbow. If two cyan elements fight for the eye, one is wrong.

**The Work-Is-The-Colour Rule.** The only non-cyan colour on screen is the real
client screenshots inside the arcana grid. Keep it that way.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow fallback)
**Body / Meta Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** A bold condensed grotesk shouts the headlines and section titles in
uppercase; a monospace carries every paragraph, label, number and ticker. The
condensed-caps + mono pairing is the arcade-console voice — one loud, one technical.

### Hierarchy
- **Display** (700, clamp 2.8–5.2rem, uppercase): the Intro headline.
- **Heading** (700, clamp 2.2–3.4rem, uppercase): per-panel titles.
- **Title** (600–700, ~1.35rem, uppercase): card and service names.
- **Body** (400, ~0.92rem, 1.65, JetBrains Mono): all prose.
- **Label** (500, 0.72rem, +0.18em tracking, JetBrains Mono): kickers, meta, ticker, toggles.

**The Mono-Readout Rule.** Anything that reads like data — section counter, clock,
status, field labels, hints — is monospace with wide tracking. Prose is mono too;
only the display and titles switch to condensed caps.

## Layout

A two-pane app-shell at 100dvh. A 264px left sidebar (brand, 01–06 nav, status
footer) sits beside a content column of three stacked bands: a scrolling ticker,
a scrollable stage (max-width 1040px, centred), and a keyboard-hint footer. Only
the stage scrolls. Below 880px the sidebar becomes a horizontal top bar with a
scrollable number row (labels hidden) and the content stacks beneath; grids drop
to one column below 680px. Work and Services are two-column grids; Intro, About,
FAQ and Contact are single measured columns.

## Elevation & Depth

Flat navy layering, lit by cyan. Depth comes from the navy stack (base → panel →
raised → sink) and cyan-tinted hairlines, not resting shadows. Glow is reserved
for state: a card lifts with a cyan-tinted drop shadow on hover, the detail modal
sits in a cyan halo, and active text carries a soft cyan text-shadow.

### Shadow Vocabulary
- **Card hover** (`box-shadow: 0 14px 40px -18px var(--acc)`): cyan-tinted lift on an arcana card.
- **Accent glow** (`box-shadow: 0 0 20px -4px rgba(22,215,255,0.55)`): under primary buttons; intensifies on hover.
- **Modal halo** (`box-shadow: 0 0 60px -10px var(--acc)`): the card-detail dialog.

**The Glow-Is-A-State Rule.** Surfaces are flat at rest; a cyan glow only appears
on hover, focus or an open dialog — never as ambient decoration.

## Shapes

Sharp-edged with a signature **clip-cut**: a 14px chamfer on the top-right and
bottom-left corners (`clip-path` polygon), applied to cards, buttons, nav items,
panels, the avatar and the detail modal. Borders are single 1px cyan-tinted
hairlines. Because the clip hides outlines, keyboard focus uses an inset 2px ring
instead. No border-radius anywhere.

## Components

### Buttons
- **Shape:** clip-cut rectangle (no radius), condensed uppercase label.
- **Primary:** cyan fill, navy text, cyan glow; hover lifts 2px and deepens the glow.
- **Ghost:** transparent, ink text, dim hairline; hover border and text go cyan.

### Sidebar nav (signature)
- 01–06 switches: mono number + condensed-caps label, clip-cut. Hover tints cyan;
  the active switch fills solid cyan with navy text. Drives the stage via click,
  arrows, or number keys.

### Cards (arcana grid)
- Clip-cut navy-panel cards with a cyan top rule and hairline border; the real
  project screenshot sits in a navy-sink well. Hover lifts with a cyan shadow and
  cyan border. Click opens a centred detail modal (cyan halo) with the screenshot,
  blurb and a "Visit site →" button.

### Inputs / Fields
- Navy-sink fill, 1px hairline, mono text, mono uppercase label above. Focus shifts
  the border to cyan with a soft cyan ring. No radius.

### FAQ
- Hairline-divided `<details>`; condensed-caps question, cyan `+` that rotates to `×` when open.

### Status furniture
- Pulsing cyan availability dot, cyan monospace live clock, and a cyan scrolling
  ticker of status phrases. An opt-in `SFX ◻/◼` toggle gates a Web Audio hover/select layer.

## Do's and Don'ts

### Do:
- **Do** keep cyan as the only interface colour; let the client screenshots be the rest.
- **Do** use the 14px clip-cut consistently on cards, buttons, nav items and panels.
- **Do** set headlines and titles in Barlow Condensed uppercase; everything else in JetBrains Mono.
- **Do** reserve glow for hover / focus / open states.
- **Do** honour `prefers-reduced-motion` — wipes, blink, pulse and ticker all stop.

### Don't:
- **Don't** reintroduce the per-card rainbow (pink / violet / lime / amber accents).
- **Don't** add border-radius; corners are sharp or clip-cut.
- **Don't** let a second colour compete with cyan for "active/live."
- **Don't** make the SFX layer play by default — it stays opt-in.
