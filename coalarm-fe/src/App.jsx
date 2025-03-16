import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { Discord } from "./screens/Discord/Discord";

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
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
