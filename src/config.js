import dotenv from 'dotenv';

// Load dotenv config
dotenv.config();

const globalConfig = {
  googleMapApi: {
    apiToken: process.env.API_TOKEN || 'defaultApiToken',
  },
  port: process.env.PORT || 5000,
};

export default globalConfig;
