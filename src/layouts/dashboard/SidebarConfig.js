import fileTextFill from '@iconify/icons-eva/file-text-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import layersFill from '@iconify/icons-eva/layers-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import shoppingCartFill from '@iconify/icons-eva/shopping-cart-fill';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: getIcon(homeFill)
  },
  {
    title: 'category',
    path: '/category',
    icon: getIcon(layersFill)
  },
  {
    title: 'Order',
    path: '/order',
    icon: getIcon(shoppingBagFill),
    isAuth: true
  },
  {
    title: 'cart',
    path: '/cart',
    icon: getIcon(shoppingCartFill),
    isAuth: true
  },
  {
    title: 'blog',
    path: '/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'About us',
    path: '/about',
    icon: getIcon(peopleFill)
  },

  {
    title: 'login',
    path: '/auth/login',
    icon: getIcon(lockFill),
    isAuth: false
  }
];

export default sidebarConfig;
