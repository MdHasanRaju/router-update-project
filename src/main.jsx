import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './components/Contact/Contact';
import About from './components/About/About';

import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import UserDetail from './components/Userdetail/UserDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "user/:userId",
        element: <UserDetail />, 
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element:  <About />,
      }, 
      // another not found
      {
        path: "*",
        element:  <div className='text-center'>44444444444400444444444444</div>,
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
