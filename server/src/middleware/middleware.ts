import express from "express";

export function setMiddlewares(app: express.Application): void {
  // app.use("define middlewares")
  app.use(logger);
}

var logger = function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log("test middleware");
  
  
  next(); // Passing the request to the next handler in the stack.
};
