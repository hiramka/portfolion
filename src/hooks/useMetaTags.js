import { useEffect } from 'react';

export function useMetaTags({ title, description, image, url }) {
  useEffect(() => {
    const defaultTitle = "Ascendancy Solutions | Software Development & Digital Agency";
    const defaultDesc = "Transforming ideas into high-converting digital products, web applications, and custom software.";

    document.title = title ? `${title} | Ascendancy Solutions` : defaultTitle;

    const setMetaTag = (selector, attrName, attrVal, contentVal) => {
      if (!contentVal) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description || defaultDesc);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title || defaultTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description || defaultDesc);
    if (image) setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    if (url) setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
  }, [title, description, image, url]);
}
