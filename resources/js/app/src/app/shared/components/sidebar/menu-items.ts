import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'fa fa-chart-pie',
  //   itemClass: '',
  //   linkClass: '',
  //   extralink: false,
  //   submenu: [],
  //   role: false
  // },
  {
    path: '/empresas',
    title: 'Empresas',
    icon: 'fa fa-shop',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Super'
  },
  {
    path: '/usuarios',
    title: 'Usuarios',
    icon: 'fa fa-user-friends',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/proveedores',
    title: 'Proveedores',
    icon: 'fa fa-box',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/productos',
    title: 'Productos',
    icon: 'fa fa-bag-shopping',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/marcas',
    title: 'Marcas',
    icon: 'fa fa-spell-check',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/clientes',
    title: 'Clientes',
    icon: 'fa fa-users',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/punto-de-venta',
    title: 'Punto de venta',
    icon: 'fa fa-credit-card',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'User'
  },
  {
    path: '/ventas',
    title: 'Reporte de ventas',
    icon: 'fa fa-chart-line',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
  {
    path: '/compras',
    title: 'Reporte de compras',
    icon: 'fa fa-chart-pie',
    itemClass: '',
    linkClass: '',
    extralink: false,
    submenu: [],
    role: 'Admin'
  },
];
