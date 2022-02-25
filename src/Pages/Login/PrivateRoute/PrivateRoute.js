import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return (
      <Button
        style={{ marginLeft: "50%", marginRight: "50%", display: "block" }}
        className="mt-3 mx-auto"
        variant="dark"
        disabled
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  return user.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
