# Software Development Template & Architecture Documentation

## 📌 Executive Summary

**DevStack Pro** is a standardized, production-ready web application starter boilerplate designed to serve as a reusable foundation for starting new software development projects.

It replaces ad-hoc setup with a clean, modular architecture based on **React 19**, **Vite 8**, **React Router 7**, **Modular CSS Design Tokens**, **Web3Forms REST API Integration**, **Global Error Boundaries**, **Form Validation Hooks**, **Dynamic SEO Meta Tags**, and **Automated CI/CD Workflows**.

---

## 🚀 Quickstart: Seeding a New Software Project

Follow this workflow to create a new project from this template:

### Step 1: Copy Template Codebase
Copy the template folder or clone it into your new project directory:
```bash
# Copy template folder to your new project destination
cp -r portfolion my-new-software-app
cd my-new-software-app

# Install project dependencies
npm install
```

### Step 2: Update Application Configuration
Open [`src/config/site.js`](file:///c:/Users/Administrator/Desktop/Work/portfolion/src/config/site.js) and update your brand details, navigation links, and API base settings:

```javascript
export const siteConfig = {
  name: "My New Platform",
  shortName: "MyPlatform",
  description: "Modern web application platform...",
  api: {
    baseUrl: "https://api.myplatform.com",
    web3FormsKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  },
  // Feature Toggles
  features: {
    darkModeToggle: true,
    analytics: false,
    toastNotifications: true,
  },
};
```

### Step 3: Setup Environment Variables
Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Set your Web3Forms access key for email form submissions:
```env
VITE_APP_TITLE="My New Platform"
VITE_API_BASE_URL="https://api.myplatform.com"
VITE_WEB3FORMS_ACCESS_KEY="YOUR_WEB3FORMS_ACCESS_KEY_HERE"
```

### Step 4: Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📁 Complete Directory Architecture Map

```text
portfolion/
├── .github/
│   └── workflows/
│       └── ci.yml              # Automated GitHub Actions CI build & lint workflow
├── public/
│   └── _redirects              # Netlify & Cloudflare Pages SPA rewrite rules
├── .env.example                # Environment variable schema definition
├── README.md                   # Repository overview & setup quickstart
├── TEMPLATE_DOCUMENTATION.md   # Complete architecture & API reference (This File)
├── vercel.json                 # Vercel deployment & SPA fallback routing config
├── vite.config.js              # Build bundling, chunk splitting & @ path alias config
└── src/
    ├── App.jsx                 # Main React Router setup, ErrorBoundary & Layout wrapper
    ├── index.css               # Design tokens, CSS variables, dark/light theme resets
    ├── config/
    │   └── site.js             # Central config for branding, API, & nav links
    ├── context/
    │   ├── ThemeContext.jsx    # Dark/Light theme switching provider
    │   └── ToastContext.jsx    # Floating alert notification provider
    ├── hooks/
    │   ├── useForm.js          # Custom Form Management & Validation hook
    │   ├── useMetaTags.js      # Dynamic SEO & OpenGraph meta tag updater
    │   ├── useLocalStorage.js  # Persistent state hook synced with localStorage
    │   ├── useDebounce.js      # Value debouncing hook for search/inputs
    │   └── useFetch.js         # Asynchronous data fetching hook
    ├── services/
    │   └── api.js              # REST API client & Web3Forms integration
    ├── utils/
    │   └── helpers.js          # Class string formatting, date parsing, copy helpers
    └── components/
        ├── common/             # Production UI Component Primitives
        │   ├── Badge.jsx & .css
        │   ├── Button.jsx & .css
        │   ├── Card.jsx & .css
        │   ├── CodeBlock.jsx & .css
        │   ├── ErrorBoundary.jsx & .css  # Global React Error Boundary
        │   ├── Input.jsx & .css
        │   ├── Modal.jsx & .css
        │   ├── NotFound.jsx & .css       # 404 Route Fallback View
        │   ├── SEO.jsx                   # Dynamic SEO Component
        │   ├── Spinner.jsx & .css
        │   ├── Tabs.jsx & .css
        │   └── Toast.jsx & .css
        ├── layout/             # Application Layout Components
        │   ├── Navbar.jsx & .css
        │   └── Footer.jsx & .css
        └── template/           # Interactive Template Catalog & Playground
            ├── ApiSandbox.jsx & .css
            ├── ComponentCatalog.jsx & .css
            ├── QuickstartGuide.jsx & .css
            └── SampleProductApp.jsx & .css
```

---

## 🛠️ Advanced Starter Features

### 1. React Router Single Page Application Routing
Pre-configured with `react-router-dom`:
- `/` — Overview & Dashboard
- `/quickstart` — Quickstart Guide
- `/catalog` — Interactive Component Catalog
- `/services` — API & State Layer Sandbox
- `/demo` — Sample Product Landing Page
- `*` — Accessible 404 Not Found Page

### 2. Form Validation Hook (`useForm`)
Located in [`src/hooks/useForm.js`](file:///c:/Users/Administrator/Desktop/Work/portfolion/src/hooks/useForm.js).

```jsx
import { useForm } from './hooks/useForm';

const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = useForm({
  initialValues: { email: '', name: '' },
  validationRules: {
    email: { required: true, email: true },
    name: { required: true, minLength: 2 },
  },
  onSubmit: async (formValues) => {
    await apiClient.submitContact(formValues);
  },
});
```

### 3. Dynamic SEO Meta Manager (`SEO`)
Located in [`src/components/common/SEO.jsx`](file:///c:/Users/Administrator/Desktop/Work/portfolion/src/components/common/SEO.jsx).

```jsx
<SEO 
  title="Component Catalog" 
  description="Explore reusable UI primitives."
  image="/og-image.png"
/>
```

### 4. CI/CD & Deployment Configs
- **GitHub Actions**: `.github/workflows/ci.yml` runs automated linting and production build verification on push and PR.
- **Vercel**: `vercel.json` configured with SPA rewrites (`/.*` -> `/index.html`) and asset caching.
- **Netlify / Cloudflare**: `public/_redirects` configured for SPA fallback routing (`/* /index.html 200`).

---

## ⚙️ Diagnostic & Build Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches Vite dev server with instant HMR |
| `npm run build` | Compiles production assets into `dist/` with chunking |
| `npm run preview` | Serves local production preview of `dist/` |
| `npm run lint` | Diagnostics check with Oxlint |

---

## 🛡️ License & Reuse Guidelines

This template is open for use across all your software development projects. When starting a new project, copy the directory, update `src/config/site.js`, add your `.env` variables, and build your custom views on top of the provided component primitives.
