import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'bi bi-bar-chart',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   super: false
  // },
  {
    path: '/empresas',
    title: 'Empresas',
    icon: 'bi bi-shop-window',
    class: '',
    extralink: false,
    submenu: [],
    super: true
  },
  {
    path: '/proveedores',
    title: 'Proveedores',
    icon: 'bi bi-box2',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/productos',
    title: 'Productos',
    icon: 'bi bi-bag',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/marcas',
    title: 'Marcas',
    icon: 'bi bi-spellcheck',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
];
