# Ascendancy Solutions 🚀

> **High-Converting Websites, Apps & Digital Growth Experiences.**

Ascendancy Solutions is a modern, full-service digital agency portfolio designed to showcase bespoke web development, mobile applications, brand identity, and performance marketing services.

🌐 **Live URL**: [https://ascendancysolutions.vercel.app/](https://ascendancysolutions.vercel.app/)

---

## ✨ Features

- **Dynamic Hero Section**: High-impact value proposition, animated conversion badges, and quick CTA routing.
- **1-Click Discovery Call Scheduler**: Direct 15-minute strategy call booking with live availability indicators, instant WhatsApp connect, and tailored video call scheduling.
- **Interactive Case Study Modals**: Deep-dive project breakdowns detailing objectives, tech stacks, solutions, and measurable business outcomes.
- **Service Catalog**: Comprehensive breakdown of service offerings including Full-Stack Web Development, Mobile Apps, E-Commerce, UI/UX Design, Video Editing, and SEO Optimization.
- **Social Proof & Testimonials**: Client reviews highlighting project satisfaction, delivery speed, and return on investment.
- **Interactive FAQ Accordion**: Expandable answers addressing timelines, pricing, support, and technical maintenance.
- **Live Contact Form**: Integrated with [Web3Forms](https://web3forms.com/) for instant email delivery, complemented by 1-click WhatsApp and direct phone calling triggers.
- **SEO & Performance Ready**:
  - Semantic HTML5 structure
  - Open Graph & Twitter Cards for rich social link previews
  - Schema.org (`ProfessionalService`) JSON-LD structured data for search engines
  - Auto-generated `sitemap.xml` and `robots.txt`
  - Zero heavy CSS frameworks—custom, hardware-accelerated CSS animations and sleek glassmorphic dark mode styling
  - Integrated [Vercel Analytics](https://vercel.com/analytics)

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/) (lightning-fast HMR and optimized production chunks)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Modular, responsive, custom variables, glassmorphic effects)
- **Forms & Lead Capture**: [Web3Forms API](https://web3forms.com/)
- **Analytics**: [@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hiramka/portfolion.git
   cd portfolion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with Hot Module Replacement |
| `npm run build` | Compiles optimized production bundle into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs Oxlint for fast code quality checks |

---

## 📂 Project Structure

```text
portfolion/
├── public/
│   ├── logo.jpg               # Agency branding and Open Graph preview image
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # Search engine indexing sitemap
├── src/
│   ├── assets/                # Static media assets
│   ├── components/
│   │   ├── AboutSection.jsx   # Agency story, values, and credentials
│   │   ├── CaseStudyModal.jsx # Detailed portfolio case study popups
│   │   ├── ContactSection.jsx # Contact form with Web3Forms & direct channels
│   │   ├── CustomCursor.jsx   # Interactive fluid glow cursor
│   │   ├── DiscoveryCallModal.jsx # 1-click strategy consultation booking modal
│   │   ├── FaqSection.jsx     # Collapsible FAQ accordion
│   │   ├── FloatingConversionWidget.jsx # Floating booking trigger with availability pulse
│   │   ├── Footer.jsx         # Site navigation, copyright, and legal links
│   │   ├── HeroSection.jsx    # Primary hero banner and conversion CTAs
│   │   ├── Navbar.jsx         # Floating glassmorphic header navigation
│   │   ├── PortfolioSection.jsx # Featured projects showcase
│   │   ├── ServicesSection.jsx # Core service capabilities
│   │   └── TestimonialsSection.jsx # Client testimonials & social proof
│   ├── App.jsx                # Root layout orchestrator
│   ├── index.css              # Global design system, colors, typography
│   └── main.jsx               # Application mount point with Vercel Analytics
├── index.html                 # Primary HTML template with SEO meta & JSON-LD
├── vite.config.js             # Vite build & chunk configuration
└── package.json
```

---

## 🚢 Deployment

The project is pre-configured for seamless zero-config deployment on **Vercel**:

1. Push your repository to GitHub / GitLab.
2. Import the repository into [Vercel Dashboard](https://vercel.com/new).
3. Set the `VITE_WEB3FORMS_ACCESS_KEY` under **Environment Variables**.
4. Deploy! Any subsequent pushes to the `main` branch trigger automatic production builds.

---

## 📬 Contact & Inquiries

- **Agency**: Ascendancy Solutions
- **Website**: [ascendancysolutions.vercel.app](https://ascendancysolutions.vercel.app/)
- **Email**: [hello@ascendancysolutions.com](mailto:hello@ascendancysolutions.com)
- **Phone / WhatsApp**: +254 715 641 618
