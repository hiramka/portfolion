import React from 'react';
import { cn } from '../../utils/helpers';
import './Badge.css';

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  return (
    <span className={cn('badge-primitive', `badge-${variant}`, `badge-${size}`, className)}>
      {Icon && <Icon className="badge-icon" size={size === 'sm' ? 12 : 14} />}
      <span>{children}</span>
    </span>
  );
}
