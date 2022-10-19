import { MatSnackBarConfig } from "@angular/material/snack-bar";

export default class Utils {
  static none() {
    // none function
  }

  static modalCenter = { centered: true };
  static modalIndex1 = { backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalIndex2 = { backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalIndex3 = { backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
  static modalLgIndex1 = { size: 'lg', backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalLgIndex2 = { size: 'lg', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalLgIndex3 = { size: 'lg', backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
  static modalXlIndex1 = { size: 'xl', backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalXlIndex2 = { size: 'xl', backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalXlIndex3 = { size: 'xl', backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
  static modalCenterIndex1 = { centered: true, backdropClass: 'z-index-backdrop-level-1', windowClass: 'z-index-window-level-1' };
  static modalCenterIndex2 = { centered: true, backdropClass: 'z-index-backdrop-level-2', windowClass: 'z-index-window-level-2' };
  static modalCenterIndex3 = { centered: true, backdropClass: 'z-index-backdrop-level-3', windowClass: 'z-index-window-level-3' };
  static snackBarSuccess: MatSnackBarConfig = { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 3500, panelClass: 'text-bg-success' }
  static snackBarWarn: MatSnackBarConfig = { horizontalPosition: 'end', verticalPosition: 'bottom', panelClass: 'text-bg-warning' }
}
