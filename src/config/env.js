const DEFAULT_ENVIRONMENT = 'development';

function getRuntimeEnvironment(env = import.meta.env) {
  const mode = (env.MODE || env.VITE_APP_ENV || DEFAULT_ENVIRONMENT).toLowerCase();
  return ['development', 'staging', 'production', 'test'].includes(mode) ? mode : DEFAULT_ENVIRONMENT;
}

const schema = {
  VITE_WEB3FORMS_ACCESS_KEY: {
    required: true,
    allowEmpty: false,
    validate: (value) => typeof value === 'string' && value.trim().length > 0 && !value.includes('YOUR_WEB3FORMS_ACCESS_KEY_HERE'),
    message: 'Missing required VITE_WEB3FORMS_ACCESS_KEY. Add it to your environment before starting the app.',
  },
  VITE_APP_ENV: {
    required: false,
    allowEmpty: true,
    defaultValue: DEFAULT_ENVIRONMENT,
    validate: (value) => ['development', 'staging', 'production', 'test'].includes((value || '').toLowerCase()),
    message: 'VITE_APP_ENV must be one of: development, staging, production, test.',
  },
  VITE_ENABLE_ANALYTICS: {
    required: false,
    allowEmpty: true,
    defaultValue: 'false',
    validate: (value) => ['true', 'false'].includes(String(value).toLowerCase()),
    message: 'VITE_ENABLE_ANALYTICS must be true or false.',
  },
};

function normalizeValue(value, { allowEmpty, defaultValue }) {
  if (value === undefined || value === null || value === '') {
    if (defaultValue !== undefined) return String(defaultValue);
    if (allowEmpty) return '';
    return undefined;
  }

  return String(value).trim();
}

export function validateEnv(env = import.meta.env) {
  const runtimeEnvironment = getRuntimeEnvironment(env);
  const errors = [];
  const config = {};

  Object.entries(schema).forEach(([key, definition]) => {
    const rawValue = env[key];
    const value = normalizeValue(rawValue, definition);

    if (value === undefined) {
      if (definition.required) {
        errors.push(definition.message);
      }
      return;
    }

    if (!definition.allowEmpty && value.length === 0) {
      errors.push(definition.message);
      return;
    }

    if (definition.validate && !definition.validate(value)) {
      errors.push(definition.message);
      return;
    }

    config[key] = value;
  });

  if (errors.length > 0) {
    const message = ['Invalid environment configuration:', ...errors].join('\n- ');
    throw new Error(message);
  }

  const appEnvironment = (config.VITE_APP_ENV || runtimeEnvironment).toLowerCase();

  return {
    environment: appEnvironment,
    web3FormsAccessKey: config.VITE_WEB3FORMS_ACCESS_KEY,
    analyticsEnabled: config.VITE_ENABLE_ANALYTICS === 'true',
    isProduction: appEnvironment === 'production',
    mode: runtimeEnvironment,
  };
}

export const appConfig = validateEnv();
