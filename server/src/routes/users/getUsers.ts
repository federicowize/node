const express = require("express");

module.exports = express
  .Router({ mergeParams: true })
  .get("/users", async (req: any, res: any, next: any) => {
    console.log("enter here", __dirname);
    res.send("Admin Homepage");
  });
