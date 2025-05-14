import React from "react";
import useAuth from "../Hooks/useAuth";
import Spinner from "../ShearedCompo/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;
  if (user.role === "admin") return children;
  return <Navigate to="/fobidden" replace />;
};

export default AdminRoute;
