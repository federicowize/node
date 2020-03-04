import { Request, Response } from "express";
import { resolve } from "path";
import express from "express";
import { createServer } from "http";
import socketio, { Socket } from "socket.io";
import { socketFlow } from "./socket/socket";
import { Server as NetServer } from "net";
import { setMiddlewares } from "./middleware/middleware";
import router from "./routes/router";

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

    setMiddlewares(this.app);

    //set socket
    this.io.on("connection", (socket: Socket) => {
      socketFlow(socket, this.io);
    });
    //

    //get router
    this.app.use("/api", router);
    //
  }

  static init(port: number) {
    return new Server(port);
  }

  public start(callback: () => void) {
    this.http.listen(this.port, callback);
  }
}
