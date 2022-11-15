// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const customMiddlewares = require(path.join(__dirname, "auth-middleware.js"));

const customRouter = jsonServer.rewriter({
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id",
});

const port = process.env.PORT || 3000;
console.log(port);
console.log(process.env.PORT);

server.use(middlewares);
server.use(customRouter);
server.use(customMiddlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
