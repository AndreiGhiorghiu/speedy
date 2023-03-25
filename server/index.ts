import CONFIG from '$server/config';
import http from '$server/http';
import log from '$server/log';

http.connect().then(() => {
  const url = `http://${CONFIG.HTTP_HOST}:${CONFIG.HTTP_PORT}`;

  process.on('SIGTERM', () => {
    http.disconnect();
  });

  log.info(`Server started: ${url}`);
});

import '$server/apis/auth';
import '$server/apis/user';
import '$server/apis/openai';
