# DevStack Pro — Full Web Application Starter Boilerplate

> A modern, production-ready full-stack software development starter template built with **React 19**, **Vite 8**, **Modular CSS Design Tokens**, and **Web3Forms REST API**.

---

## 🌟 Key Features

- 🎨 **Modular CSS Design Token System**: Dark and Light theme engine with automatic persistence in `localStorage` and OS preference detection.
- ⚡ **Vite 8 + React 19 Core**: Fast HMR dev server and optimized esbuild bundle chunking.
- 🧩 **Production UI Component Primitives**:
  - `Button` (Primary, Gradient, Secondary, Outline, Danger, Sizes, Icons, Spinners)
  - `Card` (Glassmorphic, Solid, Bordered, Glow with hover interactions)
  - `Input` (Text, Textarea, Select, and Switch Toggle controls with error feedback)
  - `Badge` (Status indicators: Primary, Success, Warning, Error, Info, Glow)
  - `Modal` (Accessible overlay dialogs with ESC key listener and body lock)
  - `Toast` (Floating alert notification stack with auto-dismiss)
  - `Tabs` (Segmented, Pills, and Underline tabbed navigation)
  - `CodeBlock` (Formatted code view with instant copy to clipboard)
  - `Spinner` & `Skeleton` (Smooth loading states)
- 🔌 **API & Services Layer**: Standardized HTTP client with Web3Forms contact form integration, error handling, and mock fallbacks.
- ⚙️ **Centralized Configuration (`src/config/site.js`)**: Customize app name, API base URLs, feature flags, and navigation links in a single file.

---

## 📁 Directory Architecture

```text
src/
├── config/             # Site configuration, navigation, brand metadata (site.js)
├── context/            # Global state providers (ThemeContext, ToastContext)
├── hooks/              # Custom React hooks (useTheme, useToast, useLocalStorage, useFetch, useDebounce)
├── services/           # API service layer (apiClient, Web3Forms integration)
├── utils/              # Class utilities, date formatters, clipboard helpers (helpers.js)
├── components/
│   ├── common/         # UI primitives (Button, Card, Input, Modal, Toast, Badge, Tabs, CodeBlock)
│   ├── layout/         # Header Navbar, Footer, Mobile Drawer
│   └── template/       # Starter template documentation & interactive component catalog
├── styles/             # Global CSS design tokens & theme variables
└── App.jsx             # Main application orchestrator
```

---

## 🚀 How to Use This Template for New Projects

### 1. Seed New Repository
Copy this directory structure or clone it for your new software project:

```bash
# Copy template directory
cp -r devstack-template my-new-project
cd my-new-project

# Install dependencies
npm install
```

### 2. Configure Brand & Site Settings
Open [`src/config/site.js`](file:///c:/Users/Administrator/Desktop/Work/portfolion/src/config/site.js) and update your project branding, navigation links, and API options:

```javascript
export const siteConfig = {
  name: "My New Project",
  shortName: "MyProject",
  description: "Description of my software application...",
  api: {
    baseUrl: "https://api.myproject.com",
    web3FormsKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  },
};
```

### 3. Setup Environment Keys
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set your Web3Forms access key in `.env` to enable real serverless contact email delivery:
```env
VITE_WEB3FORMS_ACCESS_KEY="your-access-key-here"
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your application running with HMR.

---

## 🛠️ Available NPM Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles optimized production bundle into `dist/`.
- `npm run preview`: Previews production build locally.
- `npm run lint`: Runs Oxlint code diagnostics.

---

## 📄 License
MIT License — feel free to customize and use as a starter template for all your software development projects!
