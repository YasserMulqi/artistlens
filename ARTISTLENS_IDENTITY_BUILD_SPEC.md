# ArtistLens Visual Identity & Build Spec

> Status: **Approved preliminary final direction.** Last updated: 2026-06-14.
> This document is the single source of truth for the ArtistLens project. Read it before any future design or build change. Preserve all approved decisions; only change a decision if the user explicitly requests it.

---

## 1. Brand Direction

* ArtistLens is a personal cinematic portfolio for **Yasser Al-Mulqi**.
* It should feel **personal, premium, cinematic, bold, artistic, and highly refined**.
* It is **not** a cold corporate studio website.
* The visual language should balance **personal presence** with **high-end studio execution**.

## 2. Site Structure

Approved structure:

* One-page cinematic portfolio.
* Project detail pages only when needed.
* Project detail template is approved in Desktop, Mobile, Desktop Arabic RTL, and Mobile Arabic RTL.

Homepage sections (in order):

1. Hero
2. Selected Projects
3. Selected Frames
4. Services / What I Shoot
5. Motion Highlight
6. About / Personal Presence
7. Contact / Start a Project

Behind the Scenes:

* Not a main navigation item.
* Not a standalone main page at this stage.
* It belongs inside project detail pages as supporting trust-building content.

## 3. Visual References

Use as inspiration, not direct copying:

* **Saddington Baynes** — premium imagery, cinematic transitions, stacked/overlapping visuals, high-end studio feel.
* **Vertical by Framer** — bold editorial layout, full-screen use, large typography, asymmetry, strong scroll rhythm.
* **Current ArtistLens** — original identity, orange accent, logo spirit, personal tone, existing work.

## 4. Layout Rules

* The site must feel **full-screen, not boxed**.
* Avoid rounded outer containers or a website-inside-a-card feeling.
* Use **dark cinematic backgrounds**.
* Use large images, bold typography, asymmetry, and strong negative space.
* **Selected Projects** should visually represent horizontal scrolling controlled by vertical scroll.
* **Selected Frames** should represent stacked cinematic images changing while scrolling.
* Use full-bleed cinematic image behavior where appropriate.
* Do not overuse horizontal scrolling across the whole site. It belongs mainly in Selected Projects.

## 5. Navigation

**English navigation:** Projects · Services · Motion · About · Contact · Start a Project

**Arabic navigation:** الأعمال · الخدمات · موشن · عن ياسر · تواصل · ابدأ مشروعك

Important rules:

* Product / Food / Interior / Motion are **specialties, not main pages**.
* They may appear as Hero tags and Services cards.
* Do not add them as main navigation pages unless requested later.

## 6. Motion Naming

* Replace **Video** with **Motion** in English.
* Replace **فيديو** with **موشن** in Arabic.

The play triangle must be visually placed **after the word according to the language reading direction, directly adjacent to the final letter**:

* **English LTR:** Motion uses a small orange play triangle after the word, visually on the **right** side of the final letter **n**. The triangle points to the **right**.
* **Arabic RTL:** موشن uses a small orange play triangle after the word according to RTL reading direction, visually on the **left** side of the final letter **ن**. The triangle points to the **left**.

Additional fixed rules:

* The play triangle must be a **separate vector/icon**, not typed inside the same text layer.
* Motion / موشن stays in the **normal text color**.
* Only the play triangle is **orange #FF6A00**.
* Motion / موشن stays **slightly italic**.
* Do not use confusing typed forms such as `▸Motion` or `▸موشن`.

## 7. Logo System

* The ArtistLens logo should remain **text-based** unless a final SVG export is specifically requested later.
* Logo font: **Arian-LT**.
* **ARTIST:** Arian-LT Light, gray.
* **LENS:** Arian-LT Regular, orange.
* Desktop logo has been enlarged approximately **25%** in both English Desktop and Arabic RTL Desktop.
* Do not change the Mobile logo unless requested.
* In Arabic RTL Desktop, keep the **logo on the left and navigation on the right**, same as English.
* Do not flip the header layout in Arabic.

> Implementation note: Arian-LT is not in Figma's cloud font library, so the current Desktop logo is rendered as **vector outlines** generated from the actual Arian-LT files. To use it as live editable text, add Arian-LT to the Figma organization fonts.

## 8. Color System

Primary background:

* Dark cinematic black / near-black (`#0E0E10`).

Accent:

* Orange **#FF6A00**.

Orange usage:

* Buttons
* Small indicators
* Hover states
* Selected labels
* Small play triangle

Rules:

* Orange is an **accent only**, not a dominant color.
* **Do not use gold.**
* Keep the overall feeling dark, cinematic, premium, and restrained.

Reference palette: ink `#0E0E10`, surface `#16161A`, card `#1C1C22`, off-white `#F2EFE9`, muted `#9A958C`, accent `#FF6A00`.

## 9. Typography

English:

* Headings: **Fraunces**.
* Body: **Inter**.
* Logo: **Arian-LT only**.

Arabic:

* Use the current approved Arabic font setup: **El Messiri** (headings) + **Tajawal** (body).
* Arabic typography must stay elegant, readable, and cinematic.
* Avoid using too many fonts.

General:

* Keep type hierarchy strong.
* Use large editorial headings.
* Maintain high readability for body text.
* Do not make the design look technical, generic, or corporate.

## 10. Responsive Rules

**Desktop:**

* Full-screen cinematic layout.
* Strong Hero.
* Large imagery.
* Selected Projects horizontal-scroll concept.
* Selected Frames stacked-scroll concept.

**Mobile:**

* Same identity and section order as Desktop.
* Hero image is a mobile-specific placeholder and should later be replaced with a **portrait-oriented** ArtistLens visual.
* Selected Projects should work as **horizontal swipe cards**.
* Selected Frames should preserve the **stacked cinematic feeling**.
* Buttons must remain easy to tap.
* Mobile should not feel like a simplified generic template.

## 11. Approved Temporary Content Notes

* Desktop Hero image is temporary and may be replaced later with a custom ArtistLens visual.
* Mobile Hero image is temporary and should later use a portrait-oriented ArtistLens visual.
* Project images, numbers, and captions are temporary placeholders until final content is selected.
* Current designs are approved as **preliminary final direction** unless the user requests changes.

## 12. Interaction / Build Notes

Future implementation should include:

* Smooth-scroll anchors from navigation.
* Hero subtle cinematic entrance animation.
* Selected Projects: vertical scroll controls horizontal movement.
* Selected Frames: stacked cinematic images change while scrolling.
* Motion Highlight opens reel/video.
* Contact / Start a Project CTA should remain clear and accessible.

## 13. Do / Don't

**Do:**

* Keep the site personal, cinematic, premium, and visually bold.
* Preserve the orange accent.
* Preserve the current logo system.
* Use large imagery and strong editorial typography.
* Keep Arabic RTL elegant without flipping the header layout.
* Keep Motion / موشن treatment consistent.

**Don't:**

* Do not make the site look like a cold corporate studio.
* Do not turn the homepage into many separate pages.
* Do not add Behind the Scenes to the main navigation.
* Do not use gold.
* Do not flip the Arabic header layout.
* Do not make Product / Food / Interior / Motion main navigation pages.
* Do not place the play triangle before Motion / موشن.
* Do not make the Motion / موشن word itself orange.
* Do not change Desktop or Mobile approved designs unless specifically requested.

## 14. Future Workflow Rule

Before making any future design or implementation change:

* Read this Build Spec first.
* Preserve all approved decisions.
* Only change a decision if the user explicitly requests it.

---

### Appendix — Figma file map

File: `ArtistLens_Concepts` (key `BccC5vWR0tilnXIvddTnZh`)

* `00_ArtistLens_Moodboard` — moodboard & art direction (8 sections).
* `01_Homepage_Directions` — Directions A / B / C (C = approved base).
* `02_Homepage_Desktop` — **ArtistLens Homepage Desktop – One Page Cinematic** (English, approved).
* `03_Homepage_Mobile` — **ArtistLens Homepage Mobile – One Page Cinematic** (English, approved).
* `04_Homepage_Arabic_RTL` — **ArtistLens Homepage Desktop Arabic RTL – One Page Cinematic** (approved).
* `05_Homepage_Mobile_Arabic_RTL` — **ArtistLens Homepage Mobile Arabic RTL – One Page Cinematic** (approved).
* `06_Project_Detail_Desktop` — **ArtistLens Project Detail Desktop – Case Study Template** (English, approved).
* `07_Project_Detail_Mobile` — **ArtistLens Project Detail Mobile – Case Study Template** (English, approved).
* `08_Project_Detail_Arabic_RTL` — **ArtistLens Project Detail Desktop Arabic RTL – Case Study Template** (approved).
* `09_Project_Detail_Mobile_Arabic_RTL` — **ArtistLens Project Detail Mobile Arabic RTL – Case Study Template** (approved).
* `ArtistLens Identity & Build Spec` — this document inside Figma.
