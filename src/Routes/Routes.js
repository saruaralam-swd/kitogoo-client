import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyReview from "../Pages/MyReview/MyReview";
import AddServices from "../Pages/AddServices/AddServices";
import EditReview from "../Pages/MyReview/EditReview";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>
      },
      {
        path: '/services/:id',
        loader: ({params}) => fetch(`https://kitogoo-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/myReview',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/addServices',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path: '/reviewEdit/:id',
        loader: ({params}) => fetch(`https://kitogoo-server.vercel.app/reviewEdit/${params.id}`),
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>
      }
    ]
  },
  {
    path: "*",
    element: <div>Page not found</div>
  }
])