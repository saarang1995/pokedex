export default class Config {
  static readonly SERVER_PORT = process.env.SERVER_PORT || 3000;
  static readonly SERVICE_BASE_URL = process.env.SERVICE_BASE_URL;
}
