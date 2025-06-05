import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home
      }, 
      {
        path: 'register', 
        Component: Register
      },
      {
        path:'login',
        Component:Login
      }
    ]
  
  },
]);