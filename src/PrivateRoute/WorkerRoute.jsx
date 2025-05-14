import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router";
import Spinner from "../ShearedCompo/Spinner";

const WorkerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (user.role === "worker") return children;
  return <Navigate to="/fobidden" replace />;
};

export default WorkerRoute;
