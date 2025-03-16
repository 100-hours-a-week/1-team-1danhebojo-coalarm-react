import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { Discord } from "./screens/Discord/Discord";
import { Dashboard } from "./screens/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/discord",
    element: <Discord />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
