import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import User from './components/User';
import Home from './pages/Home';
import About from './pages/About';
import Userdetails from './components/Userdetails';
import Contact from './components/Contact';
import Userform from './components/Userform';
import Userdata from './components/Userdata';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <User />,
      },
      {
        path:'users/:id',
        element: <Userdetails/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "user",
        element: <Userform />,
      },
      {
        path: "user-data",
        element: <Userdata/>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
