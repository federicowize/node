const express = require("express");

module.exports = express
  .Router({ mergeParams: true })
  .get("/users", async (req: any, res: any, next: any) => {
    console.log("enter here", req.originalUrl);
    res.send("Admin Homepage");
  });
