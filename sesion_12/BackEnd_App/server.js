const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;;
server.listen( port, ()=> console.log("Servidor en linea") );