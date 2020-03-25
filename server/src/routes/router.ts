import { sync } from "glob";
import { Router } from "express";

class RouterFactory {
  async getRoutes() {
    const rr: Promise<any>[] = sync("**/*.js", {
      cwd: `${__dirname}/`
    }).map((filename: string) => import(`./${filename}`));
    const r = await Promise.all(rr).then(each => {
      return each
        .filter((router: any) => {
          const module = new router.default();
          if (module.getRouter) {
            return true;
          }
        })
        .reduce((AcumulatorRouter: Router | any, nextRouter: Router | any) => {
          const module = new nextRouter.default();
          const x = module.getRouter();
          return AcumulatorRouter.use(module.getRouter());

          // return  AcumulatorRouter.use(nextRouter)
        }, Router({ mergeParams: true }));
    });
    return r;
  }
}
export default RouterFactory;
