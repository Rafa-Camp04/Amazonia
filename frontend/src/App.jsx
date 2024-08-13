import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/session/LoginForm';
import SignUpForm from './components/session/SignUpForm';
import Navigation from './components/navigation/Navigation';
import * as sessionActions from './store/session';
import ProductsIndex from './components/product/ProductsIndex'
import ProductShow from './components/product/ProductShow';
import Cart from './components/cart/Cart';
import Delivery from './components/cart/Delivery';
import OrderPlaced from './components/product/OrderPlaced';
import Search from './components/search/Search';

function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      {location.pathname === '/' && <Navigation/>}
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProductsIndex />
      },
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "signup",
        element: <SignUpForm />
      },
      {
        path: 'products/:id',
        element: <ProductShow />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "delivery",
        element: <Delivery />
      },
      {
        path: "order-placed",
        element: <OrderPlaced />
      },
      {
        path: "search/:q",
        element: <Search />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
//
export default App;