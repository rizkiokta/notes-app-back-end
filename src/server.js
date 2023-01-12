/* eslint-disable linebreak-style */
// eslint-disable-next-line no-console
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  console.log(process.env.NODE_NEV)
  const server = Hapi.server({
    port: 5001,
    host: process.env.NODE_NEV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
