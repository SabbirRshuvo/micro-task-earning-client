import React from "react";
import useAuth from "../Hooks/useAuth";
import Spinner from "../ShearedCompo/Spinner";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (user.role === "buyer") return children;
  return <Navigate to="/fobidden" replace />;
};

export default BuyerRoute;
