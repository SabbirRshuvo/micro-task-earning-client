import React from "react";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  if (loading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  if (user.role === "admin") return children;
  return <Navigate to="/fobidden" replace />;
};

export default AdminRoute;
