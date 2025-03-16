import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { Discord } from "./screens/Discord/Discord";
import { Dashboard } from "./screens/Dashboard/Dashboard";
import { Guide } from "./screens/Guide/Guide";
import {MypageSlacko} from "./screens/MypageSlacko/MypageSlacko";

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
  {
    path: "/guide",
    element: <Guide />,
  },
  {
    path: "/mypage",
    element: <MypageSlacko />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
