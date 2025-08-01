import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddBook from "../Pages/AddBook";
import PrivateRoute from "../Routes/PrivateRoute";
import UpdateBook from "../Pages/UpdateBook";
import MyBooks from "../Pages/MyBooks";
import { baseUrl } from "../Libs/Utility";
import BookDetails from "../Pages/BookDetails";
import Bookshelf from "../Pages/Bookshelf";
import Error from "../Pages/Error";
import Spinner from "../Pages/Spinner";
import UserProfile from "../Pages/UserProfile";
import About from "../Pages/About";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home
      }, 
      {
        path:'/add-book',
        element:<PrivateRoute>
          <AddBook></AddBook>
        </PrivateRoute>
      },
           {
        path:'/my-books',
        element:<PrivateRoute>
          <MyBooks></MyBooks>
        </PrivateRoute>
      },
      {
        path:'/update-book/:id',
        loader: ({params}) => fetch(`${baseUrl}/book/${params.id}`),
        element:<PrivateRoute>
          <UpdateBook></UpdateBook>
        </PrivateRoute>
      },
      {
        path: '/user-profile',
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>
      },
      {
        path: "/book-details/:id", 
        loader: ({params}) => fetch(`${baseUrl}/book/${params.id}`),
        Component: BookDetails

      },
      {
       path:'/bookshelf',
      loader:()=> fetch(`${baseUrl}/all-books`),
      Component:Bookshelf, 
      hydrateFallbackElement: <Spinner></Spinner>
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: '/register', 
        Component: Register
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/*',
        Component: Error
      }
    ]
  
  },
]);