import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/**
 * Dynamic SEO & OpenGraph Meta Tags Manager Hook
 * @param {object} meta 
 */
export function useMetaTags({
  title,
  description,
  image,
  url,
  type = 'website',
}) {
  useEffect(() => {
    // 1. Update Document Title
    const siteTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — Software Development Template`;
    document.title = siteTitle;

    // Helper to set or create meta element
    const setMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      if (!contentValue) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    const currentDesc = description || siteConfig.description;
    const currentUrl = url || window.location.href;
    const currentImage = image || `${window.location.origin}/og-image.png`;

    // 2. Standard Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', currentDesc);

    // 3. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', siteTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', currentDesc);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', currentImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);

    // 4. Twitter Card Meta
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', siteTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', currentDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', currentImage);

  }, [title, description, image, url, type]);
}
