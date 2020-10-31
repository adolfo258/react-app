import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND!"} />
      </Switch>
    </>
  );
}

export default App;
