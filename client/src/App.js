import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
                  </Switch>
      </div>
    </Router>
  );
}

export default App;
