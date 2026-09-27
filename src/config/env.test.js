import { describe, it, expect } from 'vitest';
import { validateEnv } from './env';

describe('environment validation', () => {
  it('accepts a valid production config', () => {
    const env = {
      MODE: 'production',
      VITE_APP_ENV: 'production',
      VITE_WEB3FORMS_ACCESS_KEY: 'prod-key-123',
      VITE_ENABLE_ANALYTICS: 'true',
    };

    const appConfig = validateEnv(env);

    expect(appConfig.environment).toBe('production');
    expect(appConfig.web3FormsAccessKey).toBe('prod-key-123');
    expect(appConfig.analyticsEnabled).toBe(true);
  });

  it('fails when required web3forms key is missing', () => {
    const env = {
      MODE: 'development',
      VITE_APP_ENV: 'development',
      VITE_WEB3FORMS_ACCESS_KEY: '',
      VITE_ENABLE_ANALYTICS: 'false',
    };

    expect(() => validateEnv(env)).toThrow(/VITE_WEB3FORMS_ACCESS_KEY/i);
  });

  it('fails when environment name is invalid', () => {
    const env = {
      MODE: 'development',
      VITE_APP_ENV: 'qa',
      VITE_WEB3FORMS_ACCESS_KEY: 'valid-key',
      VITE_ENABLE_ANALYTICS: 'false',
    };

    expect(() => validateEnv(env)).toThrow(/VITE_APP_ENV/i);
  });
});
