import LogIn from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useUser } from "../providers/users";

const Routes = () => {
  const { userToken } = useUser();
  
  const router = createBrowserRouter([
      {
        path: "/",
        element: userToken ? <Dashboard /> : <LogIn />
      }
   ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
