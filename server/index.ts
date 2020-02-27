import { Server } from "./src/server";

const server = Server.init(3000);

server.start(() => console.log("listening on *:3000"));
