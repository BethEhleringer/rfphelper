
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
                    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">username</th>
                                    <th scope="col">password</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.length ? (
                                    <tr><th scope="row">1</th>
                                        {this.state.users.map(user => (
                                            <Link to={"/users/" + user._id}>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>{user.role}</td>
                                            </Link>
                                        ))}
                                    </tr>
                                ) : (
                                    <td>No results to display</td>
                                )}
                               </tbody>
                               </table>
                               
                    </div>
                </div>
                </div>
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