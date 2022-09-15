require('dotenv').config();
const app = require('./app');

const API_PORT = process.env.API_PORT || 3001;

// eslint-disable-next-line no-console
app.listen(API_PORT, () => console.log(
  `Server is running on PORT: ${API_PORT}`,
));
