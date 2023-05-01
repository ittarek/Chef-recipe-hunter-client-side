import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/HomePage/Home";
import Blog from "../../Pages/BlogPAge/Blog";
import Main from "../../LayOut/MainLayOut/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
