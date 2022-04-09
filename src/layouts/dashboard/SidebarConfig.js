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
    title: 'Trang chủ',
    path: '/home',
    icon: getIcon(homeFill)
  },
  {
    title: 'Giỏ hàng',
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
    title: 'Về chúng tôi',
    path: '/about',
    icon: getIcon(peopleFill)
  },

  {
    title: 'Đăng nhập',
    path: '/auth/login',
    icon: getIcon(lockFill),
    isAuth: false
  }
];

export default sidebarConfig;
