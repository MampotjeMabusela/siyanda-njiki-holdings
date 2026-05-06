# Syanda Njiki Holdings — Website guide for stakeholders

This document explains the public marketing website: what each page is for, what visitors can click, and how enquiries reach the business. **Add your own screenshots** where the placeholders appear (replace the image paths or paste images into your final PDF or presentation).

---

## 1. Purpose of the site

The website introduces **Syanda Njiki Holdings (PTY) LTD (SNH)** as a multi-disciplinary contractor and supplier: electrical, civil, plumbing, procurement, transport, and solar-related messaging. It supports three practical goals:

1. **Credibility** — company story, services, portfolio imagery, blog articles, and partner logos.  
2. **Lead generation** — “Get a Quote”, contact form, and WhatsApp entry points.  
3. **Discovery** — search engines can index pages (metadata, sitemap, robots configuration).

Primary audience: **prospective clients, partners, and regulators** browsing on desktop or mobile.

---

## 2. Global layout (every page)

These elements appear on **all** main pages.

### 2.1 Header (top of the page)

| Element | What it does |
|--------|----------------|
| **Company logo** | Links to the **Home** page (`/`). |
| **Menu icon (mobile only)** | Opens a slide-in menu with the same links as the desktop navigation. |
| **Navigation links** | **Home**, **About**, **Services**, **Portfolio**, **Blog**, **Contact** — each goes to the matching page. |
| **Get a Quote** | Prominent button linking to **Contact** so visitors can request pricing or information. |

**Screenshot placeholder — full header (desktop):**

![Header — desktop](../public/images/stakeholder/placeholder-header-desktop.png)

**Screenshot placeholder — mobile menu open:**

![Header — mobile menu](../public/images/stakeholder/placeholder-header-mobile.png)

### 2.2 Footer (bottom of the page)

| Section | Content / behaviour |
|--------|----------------------|
| **Brand block** | Logo, company name, tagline *Building Tomorrow, Delivering Today*. |
| **Quick links** | Shortcuts to **About**, **Services**, and **Blog**. |
| **Contact** | Phone **+27 79 221 9330** and email **info.thegembeselectrical@gmail.com** (display only; not a form). |
| **Socials** | Icons for Facebook, LinkedIn, and Instagram (currently placeholder links `#` — replace with real URLs when ready). |
| **Copyright line** | Year and legal line for Syanda Njiki Holdings (PTY) LTD. |

**Screenshot placeholder — footer:**

![Footer](../public/images/stakeholder/placeholder-footer.png)

### 2.3 Floating WhatsApp button

- **Location:** Fixed at the **bottom-right** of the screen on all pages.  
- **Action:** Opens WhatsApp to **+27 79 221 9330** with a short prefilled greeting so the visitor can start a chat immediately.  
- **Note:** This is separate from the contact form (which also offers WhatsApp after submit — see §7).

**Screenshot placeholder — WhatsApp button:**

![WhatsApp floating button](../public/images/stakeholder/placeholder-whatsapp-float.png)

---

## 3. Page-by-page overview

### 3.1 Home (`/`)

**Role:** Main landing page — brand, geography, six service pillars, project imagery, trust logos, and primary calls to action.

**Main sections (top to bottom):**

1. **Hero** — Full-width background image, company name, SNH tagline, “Based in Mpumalanga • Serving South Africa”, headline and supporting paragraph, three buttons:  
   - **Get a Quote** → Contact  
   - **Our Services** → Services  
   - **View Portfolio** → Portfolio  

2. **What we offer** — Short paragraph positioning SNH as one partner across disciplines.

3. **Service tiles (six cards)** — Electricity, Civil Work, Plumbing, Supply, Transport, Solar — each with a short description (not clickable cards; navigation uses header/footer/buttons).

4. **Recent project work** — Intro text plus link **See full portfolio →**; three **carousels** (Electricity, Civil, Plumbing) with **left/right arrow** buttons on each image and dot indicators.

5. **Trusted by growing organizations** — Four client/partner logo tiles (NHBRC, SABISA, SAGGA, CIDB) with captions.

**Screenshot placeholders:**

![Home — hero](../public/images/stakeholder/placeholder-home-hero.png)  
![Home — service tiles](../public/images/stakeholder/placeholder-home-services.png)  
![Home — carousels](../public/images/stakeholder/placeholder-home-carousels.png)  
![Home — trust logos](../public/images/stakeholder/placeholder-home-trust.png)

---

### 3.2 About (`/about`)

**Role:** Mission, vision, and core values in readable sections.

**Content:**

- Page title **About Us** and narrative paragraphs about the company.  
- **Mission** and **Vision** cards.  
- **Core values** — Integrity, Excellence, Innovation, Sustainability, Customer Satisfaction (each with a short line of text).

**Interactions:** None beyond scrolling; links to other areas use the global header/footer.

**Screenshot placeholder:**

![About page](../public/images/stakeholder/placeholder-about.png)

---

### 3.3 Services (`/services`)

**Role:** Detailed bullet lists per discipline so procurement or technical readers can scan scope.

**How it works:**

- A row of **category pills** (buttons): **Electricity**, **Civil**, **Plumbing**, **Supply**, **Transport**.  
- Clicking a pill **highlights** it and swaps the bullet list below (one active category at a time).  
- Default category on load: **Electricity**.

**Example content types (high level):**

| Category | Typical bullets (examples) |
|----------|----------------------------|
| Electricity | Substation maintenance, transformers, street lighting, kiosk/pillar inspection, etc. |
| Civil | Painting, tiling, carpentry, component installation. |
| Plumbing | Pipe work, leaks, drains, fixtures, pressure issues. |
| Supply | PPE, electrical equipment, stationery, groceries, furniture, event décor. |
| Transport | Passenger transport, goods delivery. |

**Note:** The **Solar** pillar is highlighted on the **Home** page; the Services page tabs focus on the five categories above. Marketing copy can cross-reference Solar via blog or contact if needed.

**Screenshot placeholder:**

![Services — tabs and list](../public/images/stakeholder/placeholder-services.png)

---

### 3.4 Portfolio (`/portfolio`)

**Role:** Visual gallery of project types; supports credibility and sales conversations.

**How it works:**

- **Filter pills:** **All**, **Electrical**, **Civil**, **Supply**, **Transport** — clicking filters the grid.  
- Each **project tile** is an image with a category badge; **hover** shows “View Project” (desktop).  
- **Clicking a tile** opens a **modal** (overlay) with larger image, title, category, short description, and client label — **Close** dismisses the modal.

**Screenshot placeholders:**

![Portfolio — grid](../public/images/stakeholder/placeholder-portfolio-grid.png)  
![Portfolio — modal](../public/images/stakeholder/placeholder-portfolio-modal.png)

---

### 3.5 Blog (`/blog` and `/blog/[article]`)

**Role:** Thought leadership and SEO — longer articles on topics relevant to South African construction, safety, supply chain, and transport.

**Blog listing (`/blog`):**

- Grid of **article cards**: image, date, reading time, title, excerpt, tags, **Read more** link.

**Article pages (`/blog/...`):**

- Full article **title**, metadata line, and **rendered article body** (headings, paragraphs, lists from Markdown source files in the `posts/` folder).

**Current articles (slugs — for internal reference):**

| URL slug | Typical topic area |
|----------|----------------------|
| `/blog/electrical-safety` | Electrical safety |
| `/blog/construction-trends-2024` | Construction trends |
| `/blog/supply-chain-management` | Supply chain |
| `/blog/sustainable-transport` | Transport / sustainability |
| `/blog/importance-of-ppe` | PPE / safety |

**Screenshot placeholders:**

![Blog listing](../public/images/stakeholder/placeholder-blog-list.png)  
![Blog article](../public/images/stakeholder/placeholder-blog-article.png)

---

### 3.6 Contact (`/contact`)

**Role:** Capture structured leads and route them to **email** and **WhatsApp**.

**Left column — “Get in touch”**

- Physical address (Bethal / Mpumalanga area).  
- Phone and email (repeat of footer details).  
- **Embedded Google Map** for the listed address.

**Right column — enquiry form**

| Field | Purpose |
|-------|---------|
| Full Name | Who is contacting SNH. |
| Email | Reply address (also used as reply-to on the company email). |
| Phone | Callback number. |
| Service Interested | Dropdown: Electrical, Civil, Plumbing, Supply, Transport, Solar, Other. |
| Message | Free text (minimum length enforced so messages are substantive). |
| **Send Message** | Submits the form. |

**After clicking Send Message**

- The site sends a request to the **secure contact API** (server-side).  
- **If email is configured** (`EMAIL_USER` / `EMAIL_PASS` in environment): the same enquiry is emailed to **info.thegembeselectrical@gmail.com** with a clear subject line.  
- **WhatsApp:** A new browser tab opens with WhatsApp prefilled with the **same enquiry text** so the team sees it on the phone channel as well.  
- On-screen **notifications** confirm success or explain if email could not be sent (WhatsApp still opens so the lead is not lost).

**Screenshot placeholders:**

![Contact — full page](../public/images/stakeholder/placeholder-contact-full.png)  
![Contact — success notification](../public/images/stakeholder/placeholder-contact-toast.png)

---

## 4. Behind the scenes (for IT / marketing ops)

| Item | Description |
|------|-------------|
| **Technology** | Modern **Next.js** application (App Router), deployed as a typical Node/static hybrid suitable for **Vercel** or similar hosts. |
| **Styling** | **Tailwind CSS** — utility-based design system; brand colours **primary blue** and **secondary accent blue**, light page background. |
| **SEO** | Per-page titles/descriptions; **`/sitemap.xml`** and **`/robots.txt`** for crawlers. |
| **Images** | Stored under `public/images/` (logos, hero, blog covers, portfolio, slideshows). |
| **Blog source** | Markdown files under `posts/` — editing those files updates the blog after rebuild/redeploy. |
| **Baseline snapshot** | The repository may include a Git tag **`baseline-as-approved`** marking the stakeholder-approved visual and functional baseline. |

---

## 5. Maintenance checklist (non-technical)

- **Phone / email / address** — Update in **Footer**, **Contact** page, and any hero copy if numbers change.  
- **WhatsApp** — Update in code for the **floating button** and in **`lib/contactLead.ts`** (and test the contact form).  
- **Social links** — Replace `#` in the footer with real profile URLs.  
- **Blog** — Add or edit `.md` files in `posts/` with front matter (title, date, image path, tags).  
- **Portfolio / slideshow images** — Replace files in `public/images/` keeping filenames or update references in components.  
- **Partner logos** — Replace files under `public/images/` (e.g. `client-*.png`).  

---

## 6. Image folder suggestion

Use the folder **`public/images/stakeholder/`** (already created in the project for your screenshots).

Place your screenshots there and update the `![...](...)` paths at the top of each section, **or** embed images in Word/PowerPoint/PDF and ignore the Markdown paths.

---

## 7. Quick reference — all public URLs

| Page | URL path |
|------|----------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Blog listing | `/blog` |
| Contact | `/contact` |
| Sitemap (machine) | `/sitemap.xml` |
| Robots (machine) | `/robots.txt` |

---

*Document generated for stakeholder orientation. Technical implementation details may evolve; the behaviour described above reflects the intended user experience.*
