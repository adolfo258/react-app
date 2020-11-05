import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import ProtectedRoute from "./auth/privateRoute";
import PublicRoute from "./auth/publicRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND!"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
