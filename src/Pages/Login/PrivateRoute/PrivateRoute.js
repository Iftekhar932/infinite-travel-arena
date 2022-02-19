import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const { isLoading, user } = useAuth();
  console.log(user, user.email);
  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
