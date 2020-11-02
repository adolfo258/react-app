import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import { useEffect } from "react";
import axiosConfig from "./config/axios";
import ProtectedRoute from "./auth/privateRoute";
import PublicRoute from "./auth/publicRoute";

function App() {
  useEffect(() => {
    axiosConfig();
  }, []);

  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND!"} />
      </Switch>
    </>
  );
}

export default App;
