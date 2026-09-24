import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CodeBlock from '../common/CodeBlock';
import { Terminal, FolderTree, Rocket, CheckCircle2, ShieldCheck, Zap, Sliders } from 'lucide-react';
import './QuickstartGuide.css';

export default function QuickstartGuide() {
  return (
    <div className="quickstart-container">
      <div className="quickstart-header text-center">
        <Badge variant="glow" icon={Rocket}>Production Ready</Badge>
        <h2>Software Development Template Quickstart</h2>
        <p className="subtitle">
          Follow this 4-step workflow to clone, configure, and launch new software projects in minutes.
        </p>
      </div>

      <div className="quickstart-steps-grid">
        {/* Step 1 */}
        <Card variant="glass" className="step-card">
          <Card.Header>
            <div className="step-number">01</div>
            <Badge variant="primary" icon={Terminal}>CLI Command</Badge>
          </Card.Header>
          <Card.Body>
            <h3>Initialize New Repository</h3>
            <p>Use git or copy this starter directory structure to seed your new web project codebase.</p>
            <CodeBlock
              title="Terminal Commands"
              language="bash"
              code={`# Copy template to your new project folder\ncp -r devstack-template my-new-app\ncd my-new-app\n\n# Install dependencies\nnpm install`}
            />
          </Card.Body>
        </Card>

        {/* Step 2 */}
        <Card variant="glass" className="step-card">
          <Card.Header>
            <div className="step-number">02</div>
            <Badge variant="secondary" icon={Sliders}>Configuration</Badge>
          </Card.Header>
          <Card.Body>
            <h3>Customize Brand & Config</h3>
            <p>Update site metadata, navigation links, tech stack badges, and API endpoints in a single file.</p>
            <CodeBlock
              title="src/config/site.js"
              language="javascript"
              code={`export const siteConfig = {\n  name: "My Next App",\n  api: { baseUrl: "https://api.myproject.com" },\n  features: { darkModeToggle: true }\n};`}
            />
          </Card.Body>
        </Card>

        {/* Step 3 */}
        <Card variant="glass" className="step-card">
          <Card.Header>
            <div className="step-number">03</div>
            <Badge variant="info" icon={ShieldCheck}>Environment</Badge>
          </Card.Header>
          <Card.Body>
            <h3>Configure Environment Keys</h3>
            <p>Copy <code>.env.example</code> to <code>.env</code> and add your API keys (Web3Forms, Analytics, etc.).</p>
            <CodeBlock
              title=".env"
              language="env"
              code={`VITE_APP_TITLE="My Next App"\nVITE_API_BASE_URL="https://api.myproject.com"\nVITE_WEB3FORMS_ACCESS_KEY="your-api-key"`}
            />
          </Card.Body>
        </Card>

        {/* Step 4 */}
        <Card variant="glass" className="step-card">
          <Card.Header>
            <div className="step-number">04</div>
            <Badge variant="success" icon={Zap}>Development</Badge>
          </Card.Header>
          <Card.Body>
            <h3>Launch Dev Server</h3>
            <p>Start the Vite development server with instant HMR and hot reloading.</p>
            <CodeBlock
              title="Dev Server Command"
              language="bash"
              code={`npm run dev\n# Local server running at http://localhost:5173`}
            />
          </Card.Body>
        </Card>
      </div>

      {/* Directory Architecture Diagram */}
      <Card variant="glow" padding="lg" className="arch-card">
        <div className="arch-header">
          <FolderTree className="text-accent" size={24} />
          <div>
            <h3>Clean Modular Folder Architecture</h3>
            <p>Designed for maximum scalability, clean separation of concerns, and reusable component primitives.</p>
          </div>
        </div>

        <div className="arch-tree">
          <pre>{`src/
├── config/             # Site configuration, navigation, brand metadata (site.js)
├── context/            # Global providers (ThemeContext, ToastContext)
├── hooks/              # Reusable hooks (useTheme, useToast, useLocalStorage, useFetch)
├── services/           # API service layer (apiClient, Web3Forms integration)
├── utils/              # Class utilities, date formatters, copy helpers
├── components/
│   ├── common/         # UI primitives (Button, Card, Input, Modal, Toast, Badge, Tabs)
│   ├── layout/         # Header, Footer, Navbar, Container
│   └── template/       # Starter template documentation & component catalog
├── styles/             # Modular CSS variables, dark/light theme tokens
└── App.jsx             # Main application orchestrator`}</pre>
        </div>
      </Card>
    </div>
  );
}
