import Route from "./route";
import LogIn from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/logIn",
    element: <LogIn />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Routes;
