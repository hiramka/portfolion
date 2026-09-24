import { useState, useCallback } from 'react';

/**
 * Production Form Validation & State Hook
 */
export function useForm({ initialValues = {}, validationRules = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    return '';
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e) => {
    const name = e.target.name;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const errorMsg = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  }, [validateField, values]);

  const handleSubmit = useCallback(async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const allTouched = {};
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
      allTouched[fieldName] = true;
      const errorMsg = validateField(fieldName, values[fieldName]);
      if (errorMsg) {
        newErrors[fieldName] = errorMsg;
        isValid = false;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (!isValid) return;

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (err) {
        console.error('Form submit error:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validationRules, validateField, onSubmit]);

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
