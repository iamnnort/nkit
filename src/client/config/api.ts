import { Method } from 'axios';

const config = {
  methods: {
    get: 'GET' as Method,
    post: 'POST' as Method,
    put: 'PUT' as Method,
    delete: 'DELETE' as Method,
  },

  url: process.env.API_URL,
  endPoints: {
    // API endpoints here
  },

  gitUrl: 'https://api.github.com/repos/nikitapavets/react-ssr-ts-redux',
  gitEndPoints: {
    getReleases: () => '/releases',
  },
};

export default config;
