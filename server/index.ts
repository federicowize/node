import { Server } from "./src/server";

const server = Server.init();

const port = Number(process.env.port);

server.start(() => console.log("listening on *:" + port));
