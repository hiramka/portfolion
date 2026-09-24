import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import Tabs from '../common/Tabs';
import { Spinner, Skeleton } from '../common/Spinner';
import { useToast } from '../../context/ToastContext';
import { Layers, Send, Sparkles, AlertCircle, CheckCircle2, Sliders, Bell, Info } from 'lucide-react';
import './ComponentCatalog.css';

export default function ComponentCatalog() {
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [catalogTab, setCatalogTab] = useState('buttons');

  // Input states
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('react');
  const [switchState, setSwitchState] = useState(true);

  const handleTestToast = (type) => {
    const titles = {
      success: 'Operation Completed',
      error: 'Connection Failed',
      warning: 'Quota Exceeded',
      info: 'System Notification',
    };

    addToast({
      title: titles[type],
      message: `This is a live ${type} toast notification triggered from the component catalog.`,
      type,
    });
  };

  const handleSimulateLoading = () => {
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
      addToast({
        title: 'Action Completed',
        message: 'Async background action simulated successfully!',
        type: 'success',
      });
    }, 1500);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-header text-center">
        <Badge variant="secondary" icon={Layers}>Design System Primitives</Badge>
        <h2>Interactive Component Catalog</h2>
        <p className="subtitle">
          Test and preview all reusable UI component primitives included in this software template.
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs
        tabs={[
          { id: 'buttons', label: 'Buttons & Controls', icon: Sparkles },
          { id: 'cards', label: 'Cards & Containers', icon: Layers },
          { id: 'inputs', label: 'Form Controls', icon: Sliders },
          { id: 'feedback', label: 'Toasts & Modals', icon: Bell },
        ]}
        activeTab={catalogTab}
        onChange={setCatalogTab}
        variant="segmented"
      />

      {/* Tab Content 1: Buttons */}
      {catalogTab === 'buttons' && (
        <div className="catalog-section">
          <Card variant="glass" padding="lg">
            <Card.Header>
              <h3>Button Variants & Styles</h3>
              <Button size="sm" variant="outline" onClick={handleSimulateLoading} isLoading={btnLoading}>
                Test Loading State
              </Button>
            </Card.Header>

            <div className="catalog-demo-row">
              <Button variant="primary" iconLeft={Send}>Primary Button</Button>
              <Button variant="gradient" iconRight={Sparkles}>Gradient Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger" iconLeft={AlertCircle}>Danger Button</Button>
            </div>

            <h4 className="sub-heading">Button Sizes</h4>
            <div className="catalog-demo-row">
              <Button size="sm" variant="primary">Small (sm)</Button>
              <Button size="md" variant="primary">Medium (md)</Button>
              <Button size="lg" variant="primary">Large (lg)</Button>
            </div>

            <h4 className="sub-heading">Badges & Status Tags</h4>
            <div className="catalog-demo-row">
              <Badge variant="primary" icon={Sparkles}>Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success" icon={CheckCircle2}>Active Status</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Critical</Badge>
              <Badge variant="info">Info Tag</Badge>
              <Badge variant="glow">Glow Special</Badge>
            </div>
          </Card>
        </div>
      )}

      {/* Tab Content 2: Cards */}
      {catalogTab === 'cards' && (
        <div className="catalog-section">
          <div className="catalog-cards-grid">
            <Card variant="glass" isHoverable padding="lg">
              <Badge variant="primary">Glassmorphic</Badge>
              <h3 style={{ marginTop: '0.75rem' }}>Glass Card</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Translucent background with smooth backdrop blur filter for modern high-tech aesthetics.
              </p>
              <Card.Footer>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Hoverable Card</span>
                <Button size="sm" variant="ghost">View Details</Button>
              </Card.Footer>
            </Card>

            <Card variant="glow" isHoverable padding="lg">
              <Badge variant="glow">Glowing Border</Badge>
              <h3 style={{ marginTop: '0.75rem' }}>Glow Card</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Highlighted card with animated primary color glow shadow for featured items.
              </p>
              <Card.Footer>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Featured Item</span>
                <Button size="sm" variant="primary">Explore</Button>
              </Card.Footer>
            </Card>

            <Card variant="solid" padding="lg">
              <Badge variant="neutral">Solid Container</Badge>
              <h3 style={{ marginTop: '0.75rem' }}>Solid Card</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                High contrast opaque card background suitable for dense form containers and dashboards.
              </p>
              <Card.Footer>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Standard Solid</span>
                <Button size="sm" variant="secondary">Configure</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      )}

      {/* Tab Content 3: Form Controls */}
      {catalogTab === 'inputs' && (
        <div className="catalog-section">
          <Card variant="glass" padding="lg">
            <h3>Interactive Form Controls</h3>
            <div className="catalog-inputs-grid">
              <Input
                label="Standard Text Input"
                placeholder="Enter project name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Updates in real-time"
              />

              <Input
                label="Select Dropdown"
                type="select"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[
                  { label: 'React 19 Core', value: 'react' },
                  { label: 'Vite 8 Build Engine', value: 'vite' },
                  { label: 'Web3Forms API Service', value: 'web3forms' },
                ]}
              />

              <Input
                label="Textarea Box"
                type="textarea"
                rows={3}
                placeholder="Write project description..."
              />

              <Input
                label="Feature Toggle Switch"
                type="switch"
                value={switchState}
                onChange={(e) => setSwitchState(e.target.checked)}
              />
            </div>
          </Card>
        </div>
      )}

      {/* Tab Content 4: Feedback (Toasts & Modals) */}
      {catalogTab === 'feedback' && (
        <div className="catalog-section">
          <Card variant="glass" padding="lg">
            <h3>Interactive Toast & Modal Triggers</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Click any button to trigger live notification toasts or test the accessible modal overlay system.
            </p>

            <div className="catalog-demo-row">
              <Button variant="primary" onClick={() => handleTestToast('success')}>
                Trigger Success Toast
              </Button>

              <Button variant="danger" onClick={() => handleTestToast('error')}>
                Trigger Error Toast
              </Button>

              <Button variant="secondary" onClick={() => handleTestToast('warning')}>
                Trigger Warning Toast
              </Button>

              <Button variant="outline" onClick={() => handleTestToast('info')}>
                Trigger Info Toast
              </Button>

              <Button variant="gradient" onClick={() => setIsModalOpen(true)}>
                Open Modal Layer
              </Button>
            </div>

            <h4 className="sub-heading">Loading States & Skeletons</h4>
            <div className="catalog-skeletons-demo">
              <div className="skeleton-row">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>

              <div className="skeleton-cards">
                <Skeleton height="24px" width="60%" />
                <Skeleton height="14px" width="90%" />
                <Skeleton height="14px" width="75%" />
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Live Modal Test Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reusable Template Modal"
        subtitle="This modal features backdrop blurring, focus handling, and ESC key close listeners."
      >
        <div className="modal-demo-content">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            You can inject any form, interactive view, or detailed confirmation dialog inside this reusable modal primitive.
          </p>
          <Input label="Sample Modal Input" placeholder="Type here..." />
          <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => {
              setIsModalOpen(false);
              addToast({ title: 'Saved', message: 'Modal input saved!', type: 'success' });
            }}>
              Confirm & Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
