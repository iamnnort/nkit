const isEnv = (env: string): boolean => {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV === env;
  }

  return false;
};

const env = {
  isProduction: () => isEnv('production'),
  isDevelopment: () => isEnv('development'),
  isTesting: () => isEnv('test'),
  get: () => process.env.NODE_ENV,
};

export default env;
