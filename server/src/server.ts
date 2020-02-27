import { Request, Response } from "express";
import { resolve } from "path";
import express from "express";
import { createServer } from "http";
import socketio, { Socket } from "socket.io";
import { socketFlow } from "./socket/socket";
import { Server as NetServer } from "net";

export class Server {
  public app: express.Application;
  public port: number;
  public http: NetServer;
  public io: socketio.Server;

  constructor(port: number) {
    this.port = port;
    this.app = express();

    this.http = createServer(this.app);
    this.io = socketio(this.http);
    //fake http
    this.app.get("/", function(req: Request, res: Response) {
      res.sendFile(resolve("./src/index.html"));
    });
    //

    //set socket
    this.io.on("connection", (socket: Socket) => {
      socketFlow(socket, this.io);
    });
    //
  }

  static init(port: number) {
    return new Server(port);
  }

  //fix any then
  public start(callback: any) {
    this.http.listen(this.port, callback);
  }
}
