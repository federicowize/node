import { Router } from "express";

export interface IRouterFactory {
  parentName:string;
  getRouter: () => Router;
}
