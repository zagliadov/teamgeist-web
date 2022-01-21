import { FC, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../state/AuthContext";

export const RequireAuth: FC = ({ children }): any => {
  const location = useLocation();
  const [auth] = useContext(AuthContext);

  if (!auth) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};
