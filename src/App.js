import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import SignIn from './components/Sign In & Register/SignIn';
import SignUp from './components/Sign In & Register/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './components/Routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path:'shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: 'inventory',
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'login',
          element:<SignIn></SignIn>
        },
        {
          path:'register',
          element:<SignUp></SignUp>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
