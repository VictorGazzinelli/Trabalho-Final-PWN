import dotenv from 'dotenv';
import http from 'http';
import register from '@react-ssr/express/register';
dotenv.config();

import app from './app';
import { normalizePort, onError} from './utils/index';

(async () => {
  
  const port = normalizePort(process.env.PORT || '3000');
  console.log('Port assigned ->', port);
  app.set('port', port);

  await register(app);

  const server = http.createServer(app);

  server.listen(port);
  server.on('error', onError);
  server.on('listening', () => console.log('Application started!'));
})();