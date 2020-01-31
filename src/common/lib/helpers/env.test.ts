import env from '@common/lib/helpers/env';

describe('env', () => {
  const helpers = {
    setEnv(envName: string) {
      process.env.NODE_ENV = envName;
    },
  };

  afterEach(() => {
    delete process.env.NODE_ENV;
  });
  it(`should detect production environment`, () => {
    helpers.setEnv('production');

    expect(env.isProduction()).toBe(true);
  });

  it(`should detect development environment`, () => {
    helpers.setEnv('development');

    expect(env.isDevelopment()).toBe(true);
  });

  it(`should detect testing environment`, () => {
    helpers.setEnv('test');

    expect(env.isTesting()).toBe(true);
  });

  it(`should detect invalid environment`, () => {
    expect(env.isProduction()).toBe(false);
    expect(env.isDevelopment()).toBe(false);
    expect(env.isTesting()).toBe(false);
  });

  it(`should return current environment`, () => {
    helpers.setEnv('production');

    expect(env.get()).toBe('production');

    helpers.setEnv('development');

    expect(env.get()).toBe('development');

    helpers.setEnv('test');

    expect(env.get()).toBe('test');
  });
});
