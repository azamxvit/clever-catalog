# Clever Catalog — Premium Flooring Showcase

![Status](https://img.shields.io/badge/status-active-success)
![Tech](https://img.shields.io/badge/stack-Next.js_16_|_Tailwind_v4_|_i18n-blue)
![Architecture](https://img.shields.io/badge/architecture-App_Router-purple)

A production-ready online showcase for a premium flooring store (laminate, porcelain, tile) in Atyrau, Kazakhstan. Designed with a "Quiet Luxury" aesthetic and built for maximum performance and seamless offline conversion via WhatsApp.

## 🚀 Key Features

* **Advanced i18n Routing**: Full bilingual support (RU/KZ) powered by `next-intl` v4. Uses Next.js 16 `proxy.ts` (Edge runtime) for optimal locale detection and domain routing (`/` and `/kz`).
* **Quiet Luxury Design System**: Premium UI with asymmetric grids, semantic color variables (Navy, Clover, Cream, Gold), and sophisticated typography (Cormorant Garamond + Inter).
* **Modern Tailwind v4 Integration**: Pure CSS configuration without `@tailwind` directives. Features custom variants for dark mode (`@custom-variant dark (&:is(.dark *));`) and smooth theme switching without flashing.
* **Direct WhatsApp Conversion**: Generates pre-filled, contextual WhatsApp messages dynamically based on the product or section the user is viewing.
* **Next.js 16 Server Components**: Zero-JS heavy lifting for the Hero and Showcase sections, achieving near-instant LCP (Largest Contentful Paint).

## 🛠 Tech Stack

* **Framework**: Next.js 16 (App Router, Turbopack)
* **Language**: TypeScript 5+
* **Styling**: Tailwind CSS v4
* **Localization**: next-intl v4+
* **Theming**: next-themes (System/Light/Dark)
* **Icons**: Lucide React
* **State Management**: Zustand 5+ (for catalog filters)

## ⚙️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/azamxvit/clever-catalog.git](https://github.com/azamxvit/clever-catalog.git)
    cd clever-catalog
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    pnpm dev
    ```

4.  **How to verify**
    * Open `http://localhost:3000`.
    * Toggle the Language (RU/KZ) in the header to see route and translation changes.
    * Toggle the Theme (Sun/Moon/Monitor icon) to check Dark Mode.
    * Click "Написать нам" to test the WhatsApp URL generation.

## 🏗 Architecture & Decisions

* **Locale Proxy (`proxy.ts`)**: Replaced the deprecated `middleware.ts`. Kept lightweight by separating `i18n-config.ts` from dynamic imports to avoid Edge Runtime compilation errors.
* **Asynchronous Params**: Fully adapted to React 19 / Next 16 requirements by unwrapping `params` and `requestLocale` as Promises in layouts and configurations.
* **Component Architecture**: 
    * `page.tsx` acts strictly as a layout orchestrator.
    * Features are split into domain-specific components (`HeroBanner`, `CategoryShowcase`, `RoomsShowcase`) for maintainability.
* **Image Optimization**: Utilizes `next/image` with remote patterns for Unsplash placeholders, rendering with `priority` on above-the-fold content.

## 👤 Author

**Azamat Omirtay**
* GitHub: [@azamxvit](https://github.com/azamxvit)
* Role: Frontend Engineer

---
*Designed & Developed for "Clever — Удачные приобретения".*