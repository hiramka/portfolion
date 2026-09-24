/**
 * Global Site & Application Configuration
 * 
 * Edit this single file to customize your app's branding, metadata,
 * navigation, API endpoints, and feature flags across new projects.
 */

export const siteConfig = {
  name: "DevStack Pro",
  shortName: "DevStack",
  description: "Modern, production-ready full-stack web application starter template built with React, Vite, and modular CSS design tokens.",
  version: "1.0.0",
  author: "Software Development Engineering Team",
  url: "https://example.com",
  
  // API Endpoints & Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "https://api.web3forms.com/submit",
    web3FormsKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
    timeoutMs: 10000,
  },

  // Feature Flags
  features: {
    darkModeToggle: true,
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    toastNotifications: true,
    customCursor: false,
    mockApiMode: true,
  },

  // Navigation Items
  navLinks: [
    { label: "Overview", href: "#overview", icon: "LayoutDashboard" },
    { label: "Quickstart Guide", href: "#quickstart", icon: "BookOpen" },
    { label: "Component Catalog", href: "#catalog", icon: "Layers" },
    { label: "API & Services", href: "#services", icon: "Cpu" },
    { label: "Sample App Demo", href: "#sample-app", icon: "Sparkles" },
  ],

  // Social & External Links
  links: {
    github: "https://github.com",
    docs: "https://docs.example.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    email: "contact@example.com",
  },

  // Sample Tech Stack Metadata for Templates
  techStack: [
    { name: "React 19", category: "UI Library", icon: "Code2", badge: "Core" },
    { name: "Vite 8", category: "Build Tool", icon: "Zap", badge: "Fast" },
    { name: "Modular CSS Tokens", category: "Styling", icon: "Palette", badge: "Themeable" },
    { name: "Lucide Icons", category: "Icons", icon: "Feather", badge: "SVG" },
    { name: "Context API", category: "State", icon: "Database", badge: "Built-in" },
    { name: "Web3Forms / REST", category: "API Layer", icon: "Send", badge: "Serverless" },
  ]
};
