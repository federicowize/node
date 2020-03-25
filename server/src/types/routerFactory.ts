import { Router } from "express";
import * as path from "path";

export abstract class RouterFactory {
  // parent folder name of the current file
  parentName: string;

  constructor(fileName: string) {
    this.parentName = `/${path
      .dirname(fileName)
      .split(path.sep)
      .pop()}`;
  }

  abstract getRouter(): Router;
}
