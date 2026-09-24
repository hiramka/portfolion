import React from 'react';
import { cn } from '../../utils/helpers';
import './Button.css';

/**
 * Flexible, accessible Button component primitive
 * Variants: primary, secondary, outline, ghost, danger, gradient
 * Sizes: sm, md, lg
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'btn-primitive',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth && 'btn-full-width',
        isLoading && 'btn-loading',
        className
      )}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <span className="btn-spinner-icon" aria-hidden="true" />
      ) : IconLeft ? (
        <IconLeft className="btn-icon btn-icon-left" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : null}
      
      <span className="btn-content">{children}</span>

      {!isLoading && IconRight ? (
        <IconRight className="btn-icon btn-icon-right" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : null}
    </button>
  );
}
