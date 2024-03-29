import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ user, redirectPath = "/login" }) {
  const isAllowed = Boolean(user);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};