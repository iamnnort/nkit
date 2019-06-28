import env from '../lib/helpers/env';

const config = {
  methods: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
  },

  url: env.isProduction() ? 'https://path/to/prod/api' : 'http://path/to/dev/api',
  endPoints: {
    // API endpoints here
  },

  gitUrl: 'https://api.github.com/repos/nikitapavets/react-ssr-ts-redux',
  gitEndPoints: {
    getReleases: () => '/releases',
  },
};

export default config;
