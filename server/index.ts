import { Request, Response } from "express";
import { resolve } from "path";
import express from "express";
import { createServer } from "http";
import socketio, { Socket } from "socket.io";
import { socketFlow } from "./src/socket/socket";

const app = express();
const http = createServer(app);
const io = socketio(http);

//fake http
app.get("/", function(req: Request, res: Response) {
  res.sendFile(resolve("./src/index.html"));
});
//


//set socket
io.on("connection", (socket: Socket) => {
  socketFlow(socket, io);
});
//


//listen
http.listen(3000, () => {
  console.log("listening on *:3000");
});
