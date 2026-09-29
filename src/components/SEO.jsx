import React from 'react';
import { useMetaTags } from '../hooks/useMetaTags';

export default function SEO({ title, description, image, url, keywords, jsonLd }) {
  useMetaTags({ title, description, image, url, keywords, jsonLd });
  return null;
}

