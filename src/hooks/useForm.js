import { useState, useCallback } from 'react';

/**
 * Production-grade custom Form Management & Validation Hook
 * @param {object} initialValues 
 * @param {object} validationRules 
 * @param {function} onSubmit 
 */
export function useForm({ initialValues = {}, validationRules = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
      return rules.requiredMessage || `${name} is required`;
    }

    if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return rules.emailMessage || 'Please enter a valid email address';
    }

    if (rules.minLength && value && value.length < rules.minLength) {
      return rules.minLengthMessage || `Must be at least ${rules.minLength} characters`;
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
      return rules.patternMessage || 'Invalid format';
    }

    if (rules.custom && typeof rules.custom === 'function') {
      const customError = rules.custom(value, values);
      if (customError) return customError;
    }

    return '';
  }, [validationRules, values]);

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      const val = values[fieldName];
      const errorMsg = validateField(fieldName, val);
      if (errorMsg) {
        newErrors[fieldName] = errorMsg;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationRules, values, validateField]);

  // Input change handler
  const handleChange = useCallback((e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues((prev) => ({ ...prev, [name]: value }));

    // Re-validate if field was touched
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  }, [touched, validateField]);

  // Input blur handler (marks touched)
  const handleBlur = useCallback((e) => {
    const name = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const errorMsg = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  }, [validateField, values]);

  // Form submit wrapper
  const handleSubmit = useCallback(async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    // Mark all as touched
    const allTouched = {};
    Object.keys(values).forEach((k) => { allTouched[k] = true; });
    setTouched(allTouched);

    const isValid = validateForm();
    if (!isValid) return;

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (err) {
        console.error('Form submission error:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validateForm, onSubmit]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
  };
}
