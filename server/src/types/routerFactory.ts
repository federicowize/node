import { Router } from "express";
import * as path from "path";

export abstract class RouterFactory {
  // parent folder name of the current file
  parentName: string;

  constructor(fileName: string) {
    const dirname = path.dirname(fileName).split("/routes/");
    this.parentName = `/${dirname[1]}`;
    if (dirname.length > 2) {
      // if there is a route folder called routes inside routes folder
      // example: /routes/users/routes/getRoute
      // works only with 2 routes, if needed more in the future should  add a for function
      this.parentName += `/${dirname[2]}`;
    }
  }

  abstract getRouter(): Router;
}
