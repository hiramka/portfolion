import { siteConfig } from '../config/site';

/**
 * Standard API Client Service Layer
 */
export const apiClient = {
  /**
   * Generic fetch request builder
   */
  async request(endpoint, options = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${siteConfig.api.baseUrl}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      return { success: true, data };
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      return { success: false, error: error.message || 'Network request failed' };
    }
  },

  /**
   * Submit Contact Form (Web3Forms ready with mock fallback)
   */
  async submitContact(formData) {
    const accessKey = siteConfig.api.web3FormsKey;
    
    // Check if using real Web3Forms key or fallback mock
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Return simulated success response for developer convenience
      await new Promise((res) => setTimeout(res, 800));
      return {
        success: true,
        message: 'Mock submission successful! Configure VITE_WEB3FORMS_ACCESS_KEY in .env to send real emails.',
        data: formData,
      };
    }

    return this.request('https://api.web3forms.com/submit', {
      method: 'POST',
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Lead: ${formData.subject || 'Website Inquiry'}`,
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        botcheck: false,
      }),
    });
  }
};
