import React from 'react';
import { cn } from '../../utils/helpers';
import './Tabs.css';

export default function Tabs({
  tabs = [],
  activeTab,
  onChange,
  variant = 'pills', // 'pills', 'underline', 'segmented'
  className = '',
}) {
  return (
    <div className={cn('tabs-wrapper', `tabs-${variant}`, className)}>
      {tabs.map((t) => {
        const key = t.id || t.value || t;
        const label = t.label || t;
        const Icon = t.icon;
        const isActive = activeTab === key;

        return (
          <button
            key={key}
            type="button"
            className={cn('tab-btn', isActive && 'tab-active')}
            onClick={() => onChange(key)}
          >
            {Icon && <Icon className="tab-icon" size={16} />}
            <span>{label}</span>
            {t.badge && <span className="tab-badge">{t.badge}</span>}
          </button>
        );
      })}
    </div>
  );
}
