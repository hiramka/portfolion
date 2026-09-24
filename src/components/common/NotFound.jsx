import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import { HelpCircle, Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <Card variant="glass" padding="lg" className="not-found-card text-center">
        <Badge variant="warning" icon={HelpCircle}>404 Not Found</Badge>
        <h2>Page Not Found</h2>
        <p className="not-found-subtitle">
          The page or route you are looking for does not exist or has been moved.
        </p>

        <div className="not-found-actions">
          <Link to="/">
            <Button variant="primary" iconLeft={Home}>
              Return to Overview
            </Button>
          </Link>
          <Button variant="outline" iconLeft={ArrowLeft} onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
