import { Method } from 'axios';

const config = {
  methods: {
    get: 'GET' as Method,
    post: 'POST' as Method,
    put: 'PUT' as Method,
    delete: 'DELETE' as Method,
  },

  statuses: {
    success: 200,
    notFound: 404,
    serverError: 500,
  },

  url: process.env.API_URL,
  endPoints: {
    // API endpoints here
  },

  gitUrl: 'https://api.github.com/repos/nikitapavets/nkit',
  gitEndPoints: {
    getReleases: () => '/releases',
  },
};

export default config;
