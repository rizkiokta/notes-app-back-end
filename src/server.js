/* eslint-disable linebreak-style */
// eslint-disable-next-line no-console
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
