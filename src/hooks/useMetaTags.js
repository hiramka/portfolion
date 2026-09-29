import { useEffect } from 'react';

export function useMetaTags({ title, description, image, url, keywords, jsonLd }) {
  useEffect(() => {
    const defaultTitle = "Ascendancy Solutions | High-Converting Websites, Apps & Digital Growth";
    const defaultDesc = "Ascendancy Solutions is a premier digital agency building high-converting websites, mobile apps, e-commerce storefronts, visual brands, and targeted digital growth campaigns.";
    const defaultUrl = "https://ascendancysolutions.vercel.app/";
    const defaultImage = "https://ascendancysolutions.vercel.app/logo.jpg";

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

    const setLinkTag = (rel, hrefVal) => {
      if (!hrefVal) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', hrefVal);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description || defaultDesc);
    setMetaTag('meta[name="title"]', 'name', 'title', title || defaultTitle);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title || defaultTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description || defaultDesc);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image || defaultImage);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url || defaultUrl);

    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title || defaultTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description || defaultDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image || defaultImage);
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', url || defaultUrl);

    setLinkTag('canonical', url || defaultUrl);

    if (jsonLd) {
      const scriptId = 'dynamic-jsonld-schema';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
    }
  }, [title, description, image, url, keywords, jsonLd]);
}

