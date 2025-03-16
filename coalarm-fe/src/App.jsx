import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./screens/Login/Login";
// import { Slack } from "./screens/Slack";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/slack",
  //   element: <Slack />,
  // },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
