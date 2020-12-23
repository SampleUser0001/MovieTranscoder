const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHanlers");

let handle = {};
handle["/"] = requestHandlers.init;
handle["/upload"] = requestHandlers.upload;
handle["/movie"] = requestHandlers.movie;

server.start(router.route, handle);
