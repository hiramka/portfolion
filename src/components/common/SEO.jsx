import React from 'react';
import { useMetaTags } from '../../hooks/useMetaTags';

/**
 * Reusable SEO Meta Tag Manager Component
 */
export default function SEO({ title, description, image, url, type = 'website' }) {
  useMetaTags({ title, description, image, url, type });
  return null;
}
