export default class Utils {
  static none(data: any) {}
  static replicate(data:any) {
    return JSON.parse(JSON.stringify(data));
  }

  static modalCenter = { centered: true };
  static modalIndex1 = { backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalIndex2 = { backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalIndex3 = { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
  static modalCenterIndex1 = { centered: true, backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalCenterIndex2 = { centered: true, backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalCenterIndex3 = { centered: true, backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
}
