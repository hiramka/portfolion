import React, { Component } from 'react';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import { AlertCircle, RefreshCw, Home, ChevronDown, ChevronUp } from 'lucide-react';
import './ErrorBoundary.css';

/**
 * Production React Error Boundary
 * Catches unhandled JavaScript rendering errors in child components
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Unhandled React Rendering Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary-container">
          <Card variant="glass" padding="lg" className="error-boundary-card text-center">
            <Badge variant="error" icon={AlertCircle}>Application Error</Badge>
            <h2>Something went wrong</h2>
            <p className="error-subtitle">
              An unexpected runtime error occurred in this view. Don't worry, the rest of the application remains intact.
            </p>

            <div className="error-actions">
              <Button
                variant="primary"
                iconLeft={RefreshCw}
                onClick={this.handleReset}
              >
                Try Reloading View
              </Button>
              <Button
                variant="outline"
                iconLeft={Home}
                onClick={() => {
                  this.handleReset();
                  window.location.href = '/';
                }}
              >
                Return Home
              </Button>
            </div>

            {/* Collapsible Error Technical Trace */}
            {this.state.error && (
              <div className="error-details-wrapper">
                <button
                  type="button"
                  className="error-toggle-btn"
                  onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                >
                  <span>Technical Diagnostics</span>
                  {this.state.showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {this.state.showDetails && (
                  <div className="error-stack-box">
                    <p className="error-message-text">{this.state.error.toString()}</p>
                    {this.state.errorInfo && (
                      <pre className="error-stack-text">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
