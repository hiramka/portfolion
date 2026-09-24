import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import QuickstartGuide from './components/template/QuickstartGuide';
import ComponentCatalog from './components/template/ComponentCatalog';
import ApiSandbox from './components/template/ApiSandbox';
import SampleProductApp from './components/template/SampleProductApp';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotFound from './components/common/NotFound';
import SEO from './components/common/SEO';
import Modal from './components/common/Modal';
import CodeBlock from './components/common/CodeBlock';
import Card from './components/common/Card';
import Badge from './components/common/Badge';
import Button from './components/common/Button';
import { Sparkles, Terminal, Layers, Cpu, ArrowRight } from 'lucide-react';

function OverviewPage({ onOpenQuickstartModal }) {
  const navigate = useNavigate();

  return (
    <div className="overview-hero flex-col gap-4">
      <SEO title="Overview & Architecture" description="Full-stack modular web application template foundation." />
      <div className="text-center" style={{ padding: '2rem 0' }}>
        <Badge variant="glow" icon={Sparkles}>Software Development Starter Architecture</Badge>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0 0.5rem 0' }}>
          Modular Web Application <span className="gradient-text">Boilerplate Template</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '720px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
          A production-ready foundation designed to kickstart software engineering projects. Packed with dark/light themes, reusable component primitives, Web3Forms REST integration, and React Router navigation.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button size="lg" variant="gradient" iconRight={ArrowRight} onClick={() => navigate('/quickstart')}>
            Quickstart Guide
          </Button>
          <Button size="lg" variant="secondary" iconLeft={Layers} onClick={() => navigate('/catalog')}>
            Component Catalog
          </Button>
          <Button size="lg" variant="outline" iconLeft={Cpu} onClick={() => navigate('/services')}>
            API & State Sandbox
          </Button>
        </div>
      </div>

      {/* Feature Matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <Card variant="glass" padding="lg" isHoverable onClick={() => navigate('/quickstart')}>
          <Badge variant="primary" icon={Terminal}>Step-by-Step</Badge>
          <h3 style={{ marginTop: '0.75rem' }}>Quickstart Architecture</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            Learn how to seed new projects, edit site config, and launch development servers in minutes.
          </p>
          <Button size="sm" variant="ghost" iconRight={ArrowRight}>Read Guide</Button>
        </Card>

        <Card variant="glass" padding="lg" isHoverable onClick={() => navigate('/catalog')}>
          <Badge variant="secondary" icon={Layers}>Design Tokens</Badge>
          <h3 style={{ marginTop: '0.75rem' }}>Component Catalog</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            Interactive UI component catalog featuring Buttons, Cards, Inputs, Toasts, Badges, and Modals.
          </p>
          <Button size="sm" variant="ghost" iconRight={ArrowRight}>Explore UI</Button>
        </Card>

        <Card variant="glass" padding="lg" isHoverable onClick={() => navigate('/services')}>
          <Badge variant="info" icon={Cpu}>Serverless API</Badge>
          <h3 style={{ marginTop: '0.75rem' }}>API & State Layer</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            Test Web3Forms form submissions, local storage persistence hooks, and theme engine switches.
          </p>
          <Button size="sm" variant="ghost" iconRight={ArrowRight}>Test API</Button>
        </Card>

        <Card variant="glass" padding="lg" isHoverable onClick={() => navigate('/demo')}>
          <Badge variant="glow" icon={Sparkles}>Live Demo</Badge>
          <h3 style={{ marginTop: '0.75rem' }}>Sample Product App</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            See how to compose these modular sections into a full modern software product landing page.
          </p>
          <Button size="sm" variant="ghost" iconRight={ArrowRight}>View Demo</Button>
        </Card>
      </div>
    </div>
  );
}

function AppContent() {
  const [isQuickstartModalOpen, setIsQuickstartModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Navbar Header */}
      <Navbar onOpenQuickstart={() => setIsQuickstartModalOpen(true)} />

      {/* Main View Router wrapped in ErrorBoundary */}
      <main className="main-content">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<OverviewPage onOpenQuickstartModal={() => setIsQuickstartModalOpen(true)} />} />
            <Route path="/quickstart" element={<><SEO title="Quickstart Guide" /><QuickstartGuide /></>} />
            <Route path="/catalog" element={<><SEO title="Component Catalog" /><ComponentCatalog /></>} />
            <Route path="/services" element={<><SEO title="API & State Layer" /><ApiSandbox /></>} />
            <Route path="/demo" element={<><SEO title="Sample Product App" /><SampleProductApp onGetStarted={() => setIsQuickstartModalOpen(true)} onOpenBooking={() => navigate('/services')} /></>} />
            <Route path="*" element={<><SEO title="404 Not Found" /><NotFound /></>} />
          </Routes>
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <Footer />

      {/* Quickstart Modal */}
      <Modal
        isOpen={isQuickstartModalOpen}
        onClose={() => setIsQuickstartModalOpen(false)}
        title="Use Template for New Project"
        subtitle="Quick 3-line command to copy and seed a new software repository."
        size="lg"
      >
        <div>
          <CodeBlock
            title="Clone & Initialize Project"
            language="bash"
            code={`# Clone starter repository template\ngit clone https://github.com/your-username/devstack-template.git my-app\ncd my-app\n\n# Install dependencies & launch dev server\nnpm install\nnpm run dev`}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.25rem' }}>
            <Button variant="ghost" onClick={() => setIsQuickstartModalOpen(false)}>Close</Button>
            <Button variant="primary" onClick={() => {
              setIsQuickstartModalOpen(false);
              navigate('/quickstart');
            }}>
              View Full Quickstart Guide
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
