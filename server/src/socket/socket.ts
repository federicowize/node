import { Socket } from "socket.io";
import { socketParamNotMatchError } from "../errors/socketParamNotMatchError";
import { SocketKeys } from "../types/socket";

export function socketFlow(socket: Socket, server: SocketIO.Server) {
  socket.on(SocketKeys.key, (msg: string) => {
    if (typeof msg !== "string")
      throw new socketParamNotMatchError(socketDisconnect, socket, interval);

    server.emit(SocketKeys.key, msg);
  });

  socket.on(SocketKeys.disconnect, () => {
    socketDisconnect(socket, interval);
  });
  const interval = setInterval(() => console.log("interval"), 5000);
}

function socketDisconnect(socket: Socket, interval: NodeJS.Timeout) {
  socket.disconnect();
  clearInterval(interval);
  //logs.
}
