import { Router, Request, Response, NextFunction } from "express";

import { IRouterFactory } from "routerFactory";

class getEmployees implements IRouterFactory {
  parentName: string = "/employees";

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
