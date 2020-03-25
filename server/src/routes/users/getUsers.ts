const express = require("express");

class TestSomething {
  public getRouter() {
    return express
      .Router({ mergeParams: true })
      .get("/users", async (req: any, res: any, next: any) => {
        console.log("enter here", req.originalUrl);
        res.send("Admin Homepage");
      });
  }
}
export default TestSomething;
