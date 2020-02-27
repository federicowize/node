export class socketParamNotMatchError extends Error {
  //fix any later
  constructor(disconnectFn: any) {
    super("parameter not match with the socket");
    disconnectFn();
  }
}
