import {
  HomeIcon,
  ProfileIcon,
  TestIcon,
  HomeIcon2,
  ProfileIcon2,
  TestIcon2,
  AdminIcon,
  AdminIcon2,
} from '../assets/SVG/userNavBar';

export const dataUserNavbar = [
  { name: 'Home', icon: HomeIcon, path: 'dashboard', icon2: HomeIcon2 },
  { name: 'Perfil', icon: ProfileIcon, path: 'profile', icon2: ProfileIcon2 },
  { name: 'Test técnicos', icon: TestIcon, path: 'tests', icon2: TestIcon2 },
];

export const dataUserNavbarAdmin = [
  { name: 'Home', icon: HomeIcon, path: 'dashboard', icon2: HomeIcon2 },
  { name: 'Perfil', icon: ProfileIcon, path: 'profile', icon2: ProfileIcon2 },
  { name: 'Test técnicos', icon: TestIcon, path: 'tests', icon2: TestIcon2 },
  { name: 'Administrar', icon: AdminIcon, path: 'admin', icon2: AdminIcon2 },
];

export const dataMapa = [
  {
    id: 1,
    title: 'Completa',
    subTitle: 'tu perfil de usuario',
    path: 'profile',
    enable: true,
  },
  {
    id: 2,
    title: 'Realiza',
    subTitle: 'test técnicos',
    path: 'tests',
    enable: true,
  },
  {
    id: 3,
    title: 'Participa',
    subTitle: 'en Show The Codes',
    path: 'dashboard',
    enable: false,
  },
  {
    id: 4,
    title: 'Recibe',
    subTitle: 'ofertas de trabajo',
    path: 'dashboard',
    enable: false,
  },
];
