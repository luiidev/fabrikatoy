// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  itemClass: string;
  linkClass: string;
  extralink: boolean;
  submenu: RouteInfo[];
  role: string;
}
