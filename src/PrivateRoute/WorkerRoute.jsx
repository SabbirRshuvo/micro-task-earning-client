import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router";

const WorkerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  if (loading)
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  if (user.role === "worker") return children;
  return <Navigate to="/fobidden" replace />;
};

export default WorkerRoute;
