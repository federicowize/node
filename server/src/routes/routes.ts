import { sync } from "glob";
import { Router } from "express";
import { RouterFactory } from "routerFactory";

class routes {
  // returns a Router with all the routes that implements RouterFactory
  // inside routes folder
  public getRoutesWithRouterFactory(): Promise<Router> {
    return this.getNestedFiles().then(classFiles =>
      classFiles
        .map((setInstance: any) => new setInstance.default())
        .filter((obj: any | RouterFactory) => (obj.getRouter ? true : false))
        .reduce((router: Router, factoryInstance: RouterFactory) => {
          return router.use(factoryInstance.getRouter());
        }, Router({ mergeParams: true }))
    );
  }

  //read nested classes inside ./routes and import
  private getNestedFiles(): Promise<Object[]> {
    return Promise.all(
      sync("**/*.js", {
        cwd: `${__dirname}/`
      }).map((filename: string) => import(`./${filename}`))
    );
  }
  static readRoutes() {
    return new routes().getRoutesWithRouterFactory();
  }
}
export default routes;
