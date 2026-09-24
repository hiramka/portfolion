import React from 'react';
import { useMetaTags } from '../hooks/useMetaTags';

export default function SEO({ title, description, image, url }) {
  useMetaTags({ title, description, image, url });
  return null;
}
