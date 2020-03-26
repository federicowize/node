import { Application, Request, Response, NextFunction } from "express";

export function setMiddlewares(app: Application): void {
  // app.use("define middlewares")
  app.use(logger);
}

var logger = function(req: Request, res: Response, next: NextFunction) {
  console.log("request log middleware");
  next();
};
