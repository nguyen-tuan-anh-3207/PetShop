import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import NotFound from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { useGetAuth } from './reducers/user/hook';
import About from './pages/About';

// ----------------------------------------------------------------------

export default function Router() {
  const { token } = useGetAuth();

  return useRoutes([
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
        { path: 'product/:id', element: <ProductDetail /> },
        { path: 'category', element: <Category /> },
        { path: 'about', element: <About /> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: token ? <Checkout /> : <Navigate to="/auth/login" replace /> },
        { path: 'blog', element: <Blog /> },
        { path: '404', element: <NotFound /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
