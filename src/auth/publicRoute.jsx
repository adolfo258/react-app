import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("Authorization");
  return (
    <Route
      {...rest}
      component={props => {
        if (token) {
          return <Redirect to="/home" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PublicRoute;
