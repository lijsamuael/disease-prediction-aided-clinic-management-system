import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ tokenKey, redirectPath = "/signin", children }) => {
  const token = localStorage.getItem(tokenKey);

  if (token == "null") {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
