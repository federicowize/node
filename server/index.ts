import { Server } from "./src/server";
const port = Number(this.process.env.port);
const server = Server.init(port);

server.start(() => console.log("listening on *:" + port));
