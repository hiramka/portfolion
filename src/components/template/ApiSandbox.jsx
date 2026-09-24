import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';
import Badge from '../common/Badge';
import CodeBlock from '../common/CodeBlock';
import { useToast } from '../../context/ToastContext';
import { useTheme } from '../../context/ThemeContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { apiClient } from '../../services/api';
import { Cpu, Send, RefreshCw, Moon, Sun, Database } from 'lucide-react';
import './ApiSandbox.css';

export default function ApiSandbox() {
  const { addToast } = useToast();
  const { theme, toggleTheme } = useTheme();

  // Test form state
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    subject: 'Project Inquiry',
    message: 'Hello! I am interested in building a software platform using this template.',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastResponse, setLastResponse] = useState(null);

  // LocalStorage state test
  const [persistentItem, setPersistentItem] = useLocalStorage('devstack_sandbox_note', 'Saved state in browser storage');
  const [noteInput, setNoteInput] = useState(persistentItem);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLastResponse(null);

    const result = await apiClient.submitContact(formData);
    setIsSubmitting(false);
    setLastResponse(result);

    if (result.success) {
      addToast({
        title: 'API Request Succeeded',
        message: result.message || 'Form payload delivered successfully.',
        type: 'success',
      });
    } else {
      addToast({
        title: 'API Request Failed',
        message: result.error || 'Failed to submit form payload.',
        type: 'error',
      });
    }
  };

  const handleSaveLocalStorage = () => {
    setPersistentItem(noteInput);
    addToast({
      title: 'State Persisted',
      message: 'Value successfully stored in browser localStorage.',
      type: 'info',
    });
  };

  return (
    <div className="sandbox-container">
      <div className="sandbox-header text-center">
        <Badge variant="info" icon={Cpu}>Services & State Layer</Badge>
        <h2>API & State Management Sandbox</h2>
        <p className="subtitle">
          Test real-world HTTP API requests (Web3Forms ready), browser persistent state, and theme management.
        </p>
      </div>

      <div className="sandbox-grid">
        {/* Left: Contact Form & API submission */}
        <Card variant="glass" padding="lg">
          <Card.Header>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send className="text-accent" size={20} />
              <h3>Web3Forms / REST API Tester</h3>
            </div>
            <Badge variant={apiClient ? 'success' : 'warning'}>API Ready</Badge>
          </Card.Header>

          <form onSubmit={handleSubmitForm} className="sandbox-form">
            <Input
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              isRequired
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              isRequired
            />

            <Input
              label="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />

            <Input
              label="Message Body"
              type="textarea"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <Button
              type="submit"
              variant="gradient"
              isLoading={isSubmitting}
              iconRight={Send}
              fullWidth
            >
              Test Submit Payload
            </Button>
          </form>

          {lastResponse && (
            <div className="sandbox-response">
              <h4>Latest Response Payload:</h4>
              <CodeBlock
                title="HTTP Response"
                language="json"
                code={JSON.stringify(lastResponse, null, 2)}
              />
            </div>
          )}
        </Card>

        {/* Right: State & Utilities Testers */}
        <div className="sandbox-side-column">
          {/* LocalStorage Tester */}
          <Card variant="glass" padding="lg">
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database className="text-accent" size={20} />
                <h3>LocalStorage Persistence</h3>
              </div>
              <Badge variant="primary">useLocalStorage</Badge>
            </Card.Header>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Test saving state that persists across page refreshes using the custom <code>useLocalStorage</code> hook.
            </p>

            <Input
              label="Persistent Note Value"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />

            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
              <Button size="sm" variant="primary" onClick={handleSaveLocalStorage}>
                Save to LocalStorage
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setNoteInput(persistentItem)}>
                Reset
              </Button>
            </div>
          </Card>

          {/* Theme State Tester */}
          <Card variant="glass" padding="lg">
            <Card.Header>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {theme === 'dark' ? <Moon className="text-accent" size={20} /> : <Sun className="text-accent" size={20} />}
                <h3>Theme Engine Switcher</h3>
              </div>
              <Badge variant="glow">{theme.toUpperCase()} MODE</Badge>
            </Card.Header>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Toggle between Dark and Light mode design tokens. Updates document attributes and saves preference automatically.
            </p>

            <Button
              variant="outline"
              iconLeft={theme === 'dark' ? Sun : Moon}
              onClick={toggleTheme}
              fullWidth
            >
              Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
