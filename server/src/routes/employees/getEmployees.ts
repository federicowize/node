import { Router, Request, Response, NextFunction } from "express";

import { RouterFactory } from "../../types/routerFactory";

class getEmployees extends RouterFactory {
  constructor() {
    super(__filename);
  }
  getRouter(): Router {
    return Router({ mergeParams: true }).get(
      this.parentName,
      async (req: Request, res: Response, next: NextFunction) => {
        console.log("enter employeess", req.originalUrl);
        res.send("Employee");
      }
    );
  }
}
export default getEmployees;
