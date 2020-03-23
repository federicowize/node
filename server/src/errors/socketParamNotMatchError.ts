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
    this.testNumbersFunction(Enumbers.one)
  }
  testNumbersFunction(numb: Enumbers):Enumbers {
    return Enumbers.one;
  }
}

export enum Enumbers {
  one="1" ,
  two="2" ,
  three ="3"
}
