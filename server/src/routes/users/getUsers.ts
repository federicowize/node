import  * as express from "express";

module.exports = express
  .Router({ mergeParams: true })
  .get("/users", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("enter here", req.originalUrl);
    res.send("Admin Homepage");
  });
