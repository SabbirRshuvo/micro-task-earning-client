import React from "react";
import useAuth from "../Hooks/useAuth";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  if (user.role === "buyer") return children;
  return <Navigate to="/fobidden" replace />;
};

export default BuyerRoute;
