# 🛋️ Kosi — Frontend E-commerce Case Study (Next.js)

> **Frontend Portfolio Project**  
> Built by [Md. Shamim Hossain](https://github.com/shamimthedev)

**Kosi** is a fictional premium furniture brand created as a **frontend case study** to demonstrate modern e-commerce UI, UX, performance optimization, and SEO implementation using **Next.js App Router**.

🌐 **Live Demo** → [https://kosi-furniture.vercel.app](https://kosi-furniture.vercel.app)

---

## 🎯 Why This Project Exists

This project was built to showcase:

- Real-world **frontend architecture** (Next.js App Router)
- Conversion-focused **e-commerce UI/UX**
- **SEO-ready** layouts & metadata
- Scalable **state management** patterns
- Clean, maintainable component structure

> ⚠️ **Note**: This is a portfolio project.  
> Product data, checkout, and payments are **mocked** for demonstration purposes.

---

## ✨ What's Implemented

### 🧱 Core Pages

- Homepage (hero, featured products, trust sections)
- Shop page (grid / list view)
- Product details
- Cart
- Checkout flow
- Order success page
- About, Blog, Contact (content & SEO focused)

### 🛒 Shopping Experience

- Client-side cart with Zustand
- Quantity management & totals
- Wishlist (UI state)
- Multi-step checkout UI
- Payment method UI (COD, bKash, Nagad — demo only)

### 🎨 UI / UX

- Mobile-first responsive layout
- Smooth transitions & micro-interactions
- Reusable UI components
- Image optimization with `next/image`
- Clean typography & spacing system

---

## ⚡ Performance & SEO Focus

- ✅ **Next.js 15 App Router**
- ✅ Server Components where applicable
- ✅ Structured metadata (OpenGraph, Twitter, JSON-LD)
- ✅ Semantic HTML
- ✅ Optimized fonts & images
- ✅ Clean URL structure

This project is intentionally built to reflect **SEO-aware frontend development**, not just visuals.

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 15**
- **React 18**
- **TypeScript**

### Styling & UI

- **Tailwind CSS**
- **Lucide React (icons)**

### State Management

- **Zustand**

### Tooling

- PNPM
- ESLint
- PostCSS

---

## 🗂️ Project Structure

```
kosi-furniture-store/
├── app/                    # App Router pages
│   ├── shop/
│   ├── cart/
│   ├── checkout/
│   ├── blog/
│   ├── about/
│   ├── contact/
│   └── layout.tsx
├── components/
│   ├── sections/           # Homepage sections
│   ├── layouts/            # Header / Footer
│   └── ui/                 # Reusable components
├── lib/
│   ├── store/              # Zustand stores
│   └── mock-data.ts
├── public/
└── types/
```

---

## 🚀 Getting Started (Local)

```bash
git clone https://github.com/shamimthedev/kosi-furniture-store.git
cd kosi-furniture-store
pnpm install
pnpm dev
```

Open → `http://localhost:3000`

---

## 🔧 Customization Notes

- **SEO** → `layout.tsx` & page metadata
- **Branding** → Tailwind config
- **Products** → `lib/mock-data.ts`
- **Fonts** → `next/font` in root layout

This project is designed to be **easily extended** or adapted into a real product.

---

## 👨‍💻 About the Developer

**Md. Shamim Hossain**  
Frontend Developer focused on **Next.js, React, and performance-driven UI**

- Specializes in frontend architecture & SEO-ready layouts
- Experience building conversion-focused websites
- Background in digital marketing (UX & funnel aware)

🔗 Portfolio → [https://shamimthedev.vercel.app](https://shamimthedev.vercel.app)  
🔗 GitHub → [https://github.com/shamimthedev](https://github.com/shamimthedev)

---

## 📄 License

MIT — free to explore and learn from.

---

<div align="center">

⭐ If this project helped you understand modern Next.js frontend patterns, feel free to star it.

**Built as a frontend case study — not a product**

</div>