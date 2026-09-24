import React, { Component } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import './ErrorBoundary.css';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="portfolio-error-container">
          <div className="portfolio-error-card">
            <AlertCircle className="error-icon" size={48} />
            <h2>Something went wrong</h2>
            <p>An unexpected error occurred while rendering this section.</p>
            <div className="error-actions">
              <button type="button" className="btn-primary" onClick={this.handleReset}>
                <RefreshCw size={16} /> Try Reloading View
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
