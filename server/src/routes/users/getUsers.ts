import { Router, Request, Response, NextFunction } from "express";

import { IRouterFactory } from "routerFactory";

class getUsers implements IRouterFactory {
  parentName: string = "/users";

  getRouter(): Router {
    return Router({ mergeParams: true }).get(
      this.parentName,
      async (req: Request, res: Response, next: NextFunction) => {
        console.log("enter here", req.originalUrl);
        res.send("User");
      }
    );
  }
}
export default getUsers;
