import dotenv from 'dotenv';
dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID,
  databaseURL: process.env.DATABASE_URL,
  authDomain: process.env.AUTH_DOMAIN,
  // OPTIONAL
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

export default config;