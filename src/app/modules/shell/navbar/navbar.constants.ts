import { NavbarItem } from 'models/navbar-item';
import { IconType } from 'types';

export const navbarItems: NavbarItem[] = [
  new NavbarItem({
    id: 1,
    title: 'Home',
    link: '/',
    icon: IconType.HOME,
  }),
  new NavbarItem({
    id: 2,
    title: 'About',
    link: '/about',
    icon: IconType.ABOUT,
  }),
];
