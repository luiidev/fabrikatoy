export default class Utils {
  static none(data: any) {}
  static replicate(data:any) {
    return JSON.parse(JSON.stringify(data));
  }
}
