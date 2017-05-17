import { NavbarItem } from 'models/navbar';
import { IconType } from 'types';

export const navbarItems: NavbarItem[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: IconType.HOME,
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    icon: IconType.ABOUT,
  },
];
