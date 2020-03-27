import { readFileSync } from "fs";

export class enviromentConfig {
  private setEnviromentConfig() {
    switch (process.env.NODE_ENV) {
      case "development":
        this.setInviroment("./enviroment/development.json");
        return;
      case "production":
        this.setInviroment("./enviroment/production.json");
        return;
      default:
        this.setInviroment("./enviroment/default.json");
        return;
    }
  }
  private setInviroment(path: string) {
    let fileBuffer = readFileSync(path);
    let enviroment = JSON.parse(fileBuffer.toString());
    process.env = { ...process.env, ...enviroment };
  }

  static setEnviroment() {
    return new enviromentConfig().setEnviromentConfig();
  }
}
