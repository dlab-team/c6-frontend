import React, { useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";


export const ProtectedRoute = () => {
  const [ user , setUser ] = useState(true);
  return (
    user 
      ? <>
          <Outlet />
        </>
      : <Navigate to="/login" />
  );
};