import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutPage } from "../09-useContext/AboutPage";
import { HomePage } from "../09-useContext/HomePage";
import { LoginPage } from "../09-useContext/LoginPage";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    /**
     * * '*' is a wildcard that matches any path
     * * if the path is not found, it will redirect to the root path
     * Navigate is a component that redirects to a specific path
     * ? you can also use the Redirect component 404
     *
     */
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;
