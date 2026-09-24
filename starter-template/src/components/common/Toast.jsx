import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import './Toast.css';

const toastIcons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

export default function Toast({ toasts = [], onClose }) {
  if (!toasts.length) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => {
        const IconComponent = toastIcons[t.type] || Info;
        return (
          <div key={t.id} className={`toast-item toast-${t.type}`}>
            <IconComponent className="toast-icon" size={20} />
            <div className="toast-content">
              {t.title && <h4 className="toast-title">{t.title}</h4>}
              <p className="toast-message">{t.message}</p>
            </div>
            <button
              type="button"
              className="toast-close"
              onClick={() => onClose(t.id)}
              aria-label="Close toast"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
