import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectEntry from "./pages/ProjectEntry";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Test from "./pages/Test";
import Usersold1 from "./pages/Usersold1";
import Usersold2 from "./pages/Usersold2";
import Usersold3 from "./pages/Usersold3";
import Login2 from "./pages/Login2";
import Members from "./pages/Members";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/projectEntry" component={ProjectEntry} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/usersold1" component={Usersold1} />
          <Route exact path="/usersold2" component={Usersold2} />
          <Route exact path="/usersold3" component={Usersold3} />
          <Route exact path="/login2" component={Login2} />
          <Route exact path="/members" component={Members} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
