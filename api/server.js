var jsonServer  = require('json-server');
var server      = jsonServer.create();
var router      = jsonServer.router(require('./db.js')());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router)
var port = process.env.API_PORT || 3004;
server.listen(port, function () {
    console.log('JSON Server is running in', port)
})
