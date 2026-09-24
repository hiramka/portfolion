import React from 'react';
import { cn } from '../../utils/helpers';
import './Input.css';

/**
 * Flexible Input / Control primitive
 * Handles standard inputs, textareas, selects, and switch toggles
 */
export default function Input({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  icon: Icon,
  options = [], // For select type
  rows = 4,     // For textarea type
  isDisabled = false,
  isRequired = false,
  className = '',
  ...props
}) {
  const isSelect = type === 'select';
  const isTextarea = type === 'textarea';
  const isSwitch = type === 'switch';

  if (isSwitch) {
    return (
      <label className={cn('switch-container', isDisabled && 'switch-disabled', className)}>
        <input
          type="checkbox"
          name={name}
          checked={Boolean(value)}
          onChange={onChange}
          disabled={isDisabled}
          {...props}
        />
        <span className="switch-slider" />
        {label && <span className="switch-label">{label}</span>}
      </label>
    );
  }

  return (
    <div className={cn('input-group', error && 'input-has-error', className)}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {isRequired && <span className="input-required">*</span>}
        </label>
      )}

      <div className="input-wrapper">
        {Icon && <Icon className="input-icon" size={18} />}

        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            disabled={isDisabled}
            className={cn('input-field', 'textarea-field', Icon && 'input-has-icon')}
            {...props}
          />
        ) : isSelect ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            className={cn('input-field', 'select-field', Icon && 'input-has-icon')}
            {...props}
          >
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value ?? opt}>
                {opt.label ?? opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={isDisabled}
            className={cn('input-field', Icon && 'input-has-icon')}
            {...props}
          />
        )}
      </div>

      {error ? (
        <span className="input-error-msg">{error}</span>
      ) : helperText ? (
        <span className="input-helper-msg">{helperText}</span>
      ) : null}
    </div>
  );
}
