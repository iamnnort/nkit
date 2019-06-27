import env from '../lib/helpers/env';

export default {
  url: env.isProduction() ? 'http://nikitapavets.by' : 'http://localhost:9010',
  gitUrl: 'https://api.github.com/repos/nikitapavets/react-ssr-ts-redux/',

  methods: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
  },

  endPoints: {},

  gitEndPoints: {
    getReleases: () => '/releases',
  },
};
