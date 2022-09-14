import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const API_PORT = process.env.API_PORT || 3001;

// eslint-disable-next-line no-console
const server = app.listen(API_PORT, () => console.log(
  `Server is running on PORT: ${API_PORT}`,
));

export default server;
