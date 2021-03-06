import React, { Component } from "react";
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
import Axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn:false,
      username:null
    }
    this.getMember = this.getMember.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateMember = this.updateMember.bind(this)
  }

  componentDidMount() {
    this.getMember()
  }

  updateMember (memberObject) {
    this.setState(memberObject)
  }

  getMember() {
    Axios.get('/member/').then(response => {
      console.log('Get member response: ')
      console.log(response.data)
      if (response.data.member) {
        console.log('Get Member: There is a member saved in the server session.')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get member: no member');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

render() {
  return (
    <div className="App">

      <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      {/* greet member if logged in: */}
      {this.state.loggedIn &&
      <p>Welcome, {this.state.username}!</p>
      }
      {/* Routes to different components */}
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
    </div>
  );
}
}

export default App;
