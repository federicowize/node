import { Socket } from "socket.io";

export class socketParamNotMatchError extends Error {
  //fix add later types.
  constructor(
    disconnectFn: (socket: Socket, interval: NodeJS.Timeout) => void,
    socket: Socket,
    interval: NodeJS.Timeout
  ) {
    super("parameter not match with the socket");
    disconnectFn(socket, interval);
  }
}
