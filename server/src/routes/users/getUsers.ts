import { Router, Request, Response, NextFunction } from "express";
import { RouterFactory } from "../../models/routerFactory";

class getUsers extends RouterFactory {
  constructor() {
    super(__filename);
  }
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
