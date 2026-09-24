import React from 'react';
import { cn } from '../../utils/helpers';
import './Card.css';

export default function Card({
  children,
  variant = 'glass', // 'glass', 'solid', 'bordered', 'glow'
  padding = 'md', // 'none', 'sm', 'md', 'lg'
  isHoverable = false,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      className={cn(
        'card-primitive',
        `card-${variant}`,
        `card-padding-${padding}`,
        isHoverable && 'card-hoverable',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className = '' }) {
  return <div className={cn('card-header', className)}>{children}</div>;
};

Card.Body = function CardBody({ children, className = '' }) {
  return <div className={cn('card-body', className)}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }) {
  return <div className={cn('card-footer', className)}>{children}</div>;
};
