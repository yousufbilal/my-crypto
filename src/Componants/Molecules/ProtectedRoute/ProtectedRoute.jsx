import React from "react";
import { Outlet, Navigate } from "react-router-dom/dist";

function ProtectedRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
