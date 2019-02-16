import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Axios from "axios";
import { Route, Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


/*function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Project List
      </a>
    </nav>
  );
}*/

class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    Axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>

        <header className="navbar App-header" id="nav-container">
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>
              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary">home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary">sign up</span>
                  </Link>
                </section>
              )}
          </div>
          <div className="col-4 col-mr-auto">
          <h1 className="App-title">Global Story Tracker</h1></div>
        </header>
      </div>
    );
  }
}

export default Nav
