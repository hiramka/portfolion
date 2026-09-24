import React from 'react';
import { cn } from '../../utils/helpers';
import './Spinner.css';

export function Spinner({ size = 'md', className = '' }) {
  return (
    <div
      className={cn('spinner-primitive', `spinner-${size}`, className)}
      role="status"
      aria-label="Loading"
    />
  );
}

export function Skeleton({ width, height, borderRadius, className = '' }) {
  const style = {
    width: width || '100%',
    height: height || '1rem',
    borderRadius: borderRadius || 'var(--radius-sm, 6px)',
  };

  return <div className={cn('skeleton-primitive', className)} style={style} />;
}
