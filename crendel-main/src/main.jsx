import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './Menu.jsx'
import './index.css'
import Auth from './Auth.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {
    path: "/Registration",
    element: <Auth />,
  },
  {
    path: "/Login",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
