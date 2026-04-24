const dotenv = require('dotenv');
const path = require('path');
const env = process.argv[2] || 'local';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });
console.log('Среда:  ', process.env.APP_ENV);
console.log('API URL:', process.env.API_URL);
console.log('Debug:  ', process.env.DEBUG);