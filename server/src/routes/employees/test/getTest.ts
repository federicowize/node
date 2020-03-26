import { Router, Request, Response, NextFunction } from "express";

import { RouterFactory } from "../../../models/routerFactory";

class getTest extends RouterFactory {
  constructor() {
    super(__filename);
  }
  getRouter(): Router {
    return Router({ mergeParams: true }).get(
      this.parentName,
      async (req: Request, res: Response, next: NextFunction) => {
        console.log("test", req.originalUrl);
        res.send("test");
      }
    );
  }
}
export default getTest;
