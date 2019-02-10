
import React, { Component } from "react";
//import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { List, ListItem } from "../components/List";


class Users extends Component {
    state = {
        users: [],
        username: "",
        password: "",
        loggedIn: false

    };


    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data, username: "", password: "" })
            )
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveUser({
                username: this.state.username,
                password: this.state.password
            }).then(() => this.setState(() => ({
                loggedIn: true
            })))
                //  }).then(res => this.loadUsers())
                //  }).then(res => this.renderRedirect())
                // }).then ( <Redirect to='/projects' />)


                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-xs-12">
                        {this.state.users.length ? (
                            <div class="row">
                                {this.state.users.map(user => (
                                    <Link to={"/users/" + user._id}>
                                        <div class="col-2">{user.username}</div>
                                        <div class="col-2">{user.password}</div>
                                        <div class="col-2">{user.role}</div>
                                    </Link>
                                ))}
                                </div>    
                        ) : (
                              <div class="row"> <div class="col-12">No results to display</div></div>
                            )}
                    

                </div>
            </div>
                </div >
/*
                        <Container fluid>
                            <Row>
                                <Col size="md-12">
                                    <Jumbotron>
                                        <h1>Users</h1>
                                    </Jumbotron>


                                    {this.state.users.length ? (
                                        <List>
                                            {this.state.users.map(user => (
                                                <ListItem key={user._id}>
                                                    <Link to={"/users/" + user._id}>
                                                        <strong>
                                                            {user._id} {user.username} | {user.password} | {user.role}
                                                        </strong>
                                                    </Link>

                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </Col></Row>
                        </Container> */
                        )
    }
}

export default Users;