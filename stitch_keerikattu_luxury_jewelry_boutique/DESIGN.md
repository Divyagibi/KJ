---
name: Heritage Elegance
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#4d463b'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#7e7669'
  outline-variant: '#d0c5b6'
  surface-tint: '#725b2e'
  primary: '#725b2e'
  on-primary: '#ffffff'
  primary-container: '#e3c58e'
  on-primary-container: '#665125'
  inverse-primary: '#e0c38c'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#cac8c8'
  on-tertiary-container: '#545454'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fedea5'
  primary-fixed-dim: '#e0c38c'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#584419'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  edge-margin-desktop: 80px
  edge-margin-mobile: 24px
  gutter: 32px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The brand personality is a marriage of **Exquisite Heritage** and **Modern Elegance**. It caters to an ultra-luxury audience that values craftsmanship, exclusivity, and the quiet confidence of "stealth wealth."

The design style is **Minimalist** with a focus on **High-Contrast** elements. It utilizes expansive whitespace to let the jewelry photography breathe, acting as a digital gallery rather than a retail shop. Every interaction should feel intentional and weighted. The aesthetic draws from high-end editorial magazines: clean lines, generous margins, and a strict focus on "the object."

## Colors
The palette is built on a foundation of **Off-White (#F9F8F6)** to provide a warm, gallery-like canvas. **Matte Black (#121212)** and **Deep Charcoal (#2D2D2D)** provide the structural weight and depth, used for footers, primary headings, and high-impact sections. 

**Warm Champagne Gold (#E3C58E)** is used exclusively as an accent. It should be applied sparingly—to indicate active states, call-to-action highlights, or subtle iconography—to maintain its perceived value. Avoid using gold for large background blocks; instead, use it for thin lines and refined typographic details.

## Typography
The typographic hierarchy relies on the contrast between the authoritative, high-contrast serifs of **Playfair Display** and the clinical, modern precision of **Inter**.

- **Playfair Display** is used for all headlines and editorial pull-quotes. Use "Italic" styles for emphasis in long-form storytelling to evoke a heritage feel.
- **Inter** is the workhorse for technical details, pricing, and navigation. 
- **Label Caps** are critical for the luxury aesthetic; use them for navigation links, category labels, and small metadata to create a structured, "catalogued" look.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to ensure precise control over the composition of imagery and text. A 12-column grid is used, but content frequently spans 6 or 8 columns to create asymmetrical, editorial-style layouts.

**Whitespace is a core asset.** Sections are separated by massive gaps (`section-gap`) to ensure the user’s focus is never divided between two disparate jewelry collections. On mobile, the margins remain generous (`24px`) to prevent the interface from feeling cramped.

## Elevation & Depth
This design system avoids traditional drop shadows. Depth is instead conveyed through **Tonal Layers** and **Subtle Outlines**.

- **Surface Levels:** The primary background is Off-White. Overlays (like quick-view modals) use a slightly darker Deep Charcoal with high-transparency backdrops (80% opacity) to create a "Jewel Box" effect.
- **Outlines:** Use 1px borders in a very light grey or champagne gold to define input fields and card boundaries. The effect should be "drawn" rather than "projected."
- **Glassmorphism:** Use extremely subtle background blurs (10px - 20px) behind navigation bars to maintain the sense of a continuous, fluid environment without breaking the minimalist aesthetic.

## Shapes
The shape language is **Architectural and Sharp**. While the `soft` setting is used, the radius is kept to a minimum (4px) to ensure the UI feels precise and high-end. 

Avoid circles unless used for functional elements like radio buttons or specific circular iconography. Square edges should dominate the layout to mirror the structured nature of high-end boutique storefronts.

## Components
### Buttons
Primary buttons are solid Matte Black with White Inter (Label-Caps) text. Secondary buttons use a Champagne Gold 1px border with no fill. On hover, the primary button should shift to a Deep Charcoal, and the secondary button should fill with a faint Gold tint.

### Cards
Jewelry cards are borderless. The product image should be the hero, appearing on a neutral grey or off-white background within the image frame. On hover, the image should subtly scale (1.05x) and display the price and a "Quick View" label in gold.

### Input Fields
Inputs are minimalist: a single 1px bottom border in Deep Charcoal. The label sits above the line in `label-caps`. Focus states transition the bottom border to Champagne Gold.

### Navigation
The navigation is centered and spacious. Use `label-caps` for links. A thin, 1px horizontal line should separate the navigation from the hero content, using the Champagne Gold color at 30% opacity.

### Chips & Badges
Used for "New Collection" or "Limited Edition" tags. These should be small, rectangular, and use the `label-caps` typography with a thin gold border. Avoid rounded pills; keep them rectangular to match the architectural style.