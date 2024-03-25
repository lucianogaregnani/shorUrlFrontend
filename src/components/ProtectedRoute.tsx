import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingLayout from "./LoadingLayout";

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <LoadingLayout isLoading={isLoading}>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </LoadingLayout>
  );
}

export default ProtectedRoute;
