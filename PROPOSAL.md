# PROJECT PROPOSAL: CORPORATE PORTAL DEVELOPMENT
**Client:** S S RUMA INTERNATIONAL LTD  
**Tagline:** Building Trust. Creating Opportunities. Delivering Excellence.  
**Date:** August 4, 2026  
**Status:** Draft Proposal  

---

## 1. Executive Summary

S S RUMA INTERNATIONAL LTD is a premier Bangladesh-based conglomerate engaged in Construction & Engineering, International Trade (Import & Export), Business Consultancy, General Supply, Logistics, and Tours & Travels. 

This proposal outlines the strategy, architecture, design system, and technical specifications for building a high-end, responsive corporate web portal. The system will leverage a **Next.js** framework with a dynamic versioning engine, enabling customizable layouts, modern theme-relative styling, and robust data persistence using **MongoDB**.

---

## 2. Brand Identity & Styling Philosophy

To align with modern web design standards and the client's corporate vision, the portal will employ a state-of-the-art visual system:

* **Dynamic Themes:** All components will reference CSS variables defined in `src/app/theme.css`. No static hardcoded hex codes will be used, allowing full theme customization (primary colors, backgrounds, borders, and typography) directly from the admin design configuration panel.
* **Typography:** Premium modern typography (e.g., Outfit or Inter from Google Fonts) configured dynamically (`font-body`, `font-display`).
* **Visual FX:** Glassmorphism, smooth micro-animations, gradient overlays, and rich hover states for interactive components.

---

## 3. Detailed Page & Section Architecture

The single-page and multi-page layouts will be built out of flexible, versioned UI blocks (V1 to V6), registered dynamically:

### 3.1. Navigation Bar (Navbars V1 - V6)
* **Features:** Responsive mobile drawer, smooth scrolling, active section highlighting, call-to-action button ("Contact Us"), and brand logo placeholder.
* **Aesthetics:** Sticky glassmorphic header with backdrop blur.

### 3.2. Home (Hero Banner)
* **Heading:** `Welcome to S S RUMA INTERNATIONAL LTD`
* **Sub-heading:** `Your Trusted Partner in Construction, International Trade, Import & Export, Business Consultancy and Global Solutions.`
* **CTAs:**
  * `Learn More` (Primary Action - redirects to About Us section with smooth scroll)
  * `Contact Us` (Secondary Action - redirects to Contact Form)

### 3.3. About Us
* **Who We Are:** Detail-rich card explaining S S RUMA INTERNATIONAL LTD's commitment to quality, transparency, and global partnerships.
* **Vision:** "To become one of the most trusted international business groups in South Asia."
* **Mission:**
  * Deliver quality services
  * Build long-term partnerships
  * Ensure customer satisfaction
  * Expand globally
* **Core Values (Interactive Badges with Hover FX):**
  * `✔️ Integrity`
  * `✔️ Innovation`
  * `✔️ Quality`
  * `✔️ Commitment`
  * `✔️ Excellence`

### 3.4. Our Services (Dynamic Service Cards)
Each service will be represented by a clean card featuring Lucide icons and hover effects:
1. **Construction & Engineering:** Building construction, renovation, and project management.
2. **Import & Export:** Global sourcing and international trade solutions.
3. **Business Consultancy:** Business setup, documentation, and strategic consulting.
4. **General Supply:** Corporate and government supply services.
5. **Logistics:** Freight forwarding and supply chain management.
6. **Tours & Travels (Optional/Expandable):** Visa assistance, air ticketing, and travel solutions.

### 3.5. Why Choose Us
A grid layout highlighting competitive advantages:
* Professional Team
* Government Registered Company
* Quality Assurance
* Fast Service
* Competitive Pricing
* International Standard
* Trusted Business Partner

### 3.6. Our Certifications
A dedicated repository for official credentials, ensuring corporate transparency and compliance.
* **Certificates included:**
  * Trade License
  * TIN Certificate
  * BIN/VAT Registration
  * RJSC Certificate
  * Membership Certificates
  * ISO Certificate (Future Placeholder)
* **Interactivity:** Every certificate will have clean, dedicated **View PDF** and **Download** buttons, opening modal previews or direct downloads.

### 3.7. Our Projects
Dynamic showcases of work:
* High-resolution image/gallery per project.
* Metadatas: **Project Name**, **Client**, **Location**, and **Completion Date**.
* Interactive filter options (e.g., filter by Construction, General Supply, etc.).

### 3.8. Gallery
Grid layouts categorized by:
* `Office`
* `Team`
* `Meetings`
* `Construction Works`
* `Business Events`
* Zoomable lightboxes for immersive image viewing.

### 3.9. Clients & Partners
A clean, grayscale-to-color logo carousel displaying corporate clients and partners.

### 3.10. Contact Us
* **Contact Details:**
  * **Head Office:** 2nd floor, Jaman Tower, Dhaka-1000, Bangladesh
  * **Phone:** +880 1911-170535, +880 1711257673
  * **Email:** info@ssrumaintltd.com
  * **Website:** www.ssrumaintltd.com
* **Interactive Elements:**
  * Embed Google Map showing head office location.
  * Modern Contact Form with real-time validation and SweetAlert2 success alerts.
  * Sticky/Floating **WhatsApp Button** for instant customer query routing.

### 3.11. Footer
* Brand name, tagline, copyright message ("Copyright © 2026 S S RUMA INTERNATIONAL LTD. All Rights Reserved."), and social media links.

---

## 4. Technical Stack & Implementation Guidelines

* **Frontend:** Next.js (App Router), Tailwind CSS.
* **Components:** shadcn/ui components customized with custom CSS variables.
* **Toasts & Feedback:**
  * Administrative success/error notifications: **SweetAlert2**.
  * Quick, non-blocking UI notifications: **sonner** (shadcn toast).
* **Database:** MongoDB to store project details, team details, contact inquiries, and theme settings.
* **Authentication & Admin Controls:**
  * Dynamic admin user management.
  * Automated configuration for `imranshuvo101@gmail.com` as the `super_admin`.
  * Dynamic project expiration controls from `/admin/system-design`.
