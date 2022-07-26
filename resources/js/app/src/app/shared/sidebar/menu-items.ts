import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'fa fa-chart-pie',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  //   super: false
  // },
  {
    path: '/empresas',
    title: 'Empresas',
    icon: 'fa fa-shop',
    class: '',
    extralink: false,
    submenu: [],
    super: true
  },
  {
    path: '/usuarios',
    title: 'Usuarios',
    icon: 'fa fa-user-friends',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/proveedores',
    title: 'Proveedores',
    icon: 'fa fa-box',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/productos',
    title: 'Productos',
    icon: 'fa fa-bag-shopping',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/marcas',
    title: 'Marcas',
    icon: 'fa fa-spell-check',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/clientes',
    title: 'Clientes',
    icon: 'fa fa-users',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/punto-de-venta',
    title: 'Punto de venta',
    icon: 'fa fa-credit-card',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/ventas',
    title: 'Reporte de ventas',
    icon: 'fa fa-chart-line',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
  {
    path: '/compras',
    title: 'Reporte de compras',
    icon: 'fa fa-chart-pie',
    class: '',
    extralink: false,
    submenu: [],
    super: false
  },
];
