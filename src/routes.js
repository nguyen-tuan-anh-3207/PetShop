import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/AdminPage/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Order from './pages/Order';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

const userRoute = [
  {
    path: '/auth',
    element: <LogoOnlyLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/home" replace /> },
      { path: 'home', element: <Products /> },
      { path: 'product/:id', element: <Products /> },
      { path: 'category', element: <Blog /> },
      { path: 'about', element: <Products /> },
      { path: 'cart', element: <Products /> },
      { path: 'order', element: <Order /> },
      { path: 'checkout', element: <Order /> },
      { path: 'blog', element: <Blog /> },
      { path: '404', element: <NotFound /> }
    ]
  },
  { path: '*', element: <Navigate to="/404" replace /> }
];

export default function Router() {
  return useRoutes(userRoute);
}
