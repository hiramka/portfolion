const IS_PROD = import.meta.env.PROD;

export function reportError(error, context = {}) {
  const payload = {
    message: error?.message || 'Unknown application error',
    stack: error?.stack || null,
    context,
    url: window.location.href,
    timestamp: new Date().toISOString(),
    environment: import.meta.env.MODE || 'development',
  };

  if (IS_PROD) {
    console.error('Production error reported:', payload);
    return;
  }

  console.warn('Development error capture:', payload);
}

export function trackEvent(eventName, properties = {}) {
  if (!import.meta.env.VITE_ENABLE_ANALYTICS || import.meta.env.VITE_ENABLE_ANALYTICS !== 'true') {
    return;
  }

  try {
    if (window?.dataLayer) {
      window.dataLayer.push({ event: eventName, ...properties });
    }
  } catch (error) {
    reportError(error, { eventName, properties });
  }
}

export function initMonitoring() {
  if (typeof window === 'undefined') return;
  window.__PORTFOLION_MONITORING__ = true;
}
