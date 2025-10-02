import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Log-in/Login';
import Register from './Components/Register/Register';
import Singup from './Components/Singup/Singup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {path:"/singUp",element:<Singup></Singup>},

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
);
