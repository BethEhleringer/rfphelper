import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

import { Input, FormBtn } from "../components/Form";

class Users extends Component {
    state = {
        users: [],
        username: "",
        password: "",
        loggedIn: false

    };

    loginHandle = () => {
        this.setState({
            loggedIn: true
        })
    }


    renderRedirect = () => {
        return <Redirect to='/projects' />

    }

    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
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
    /*
        changePage = event => {
    
        }
    
    */
    testFunction = event => {
        console.log("will i ever learn this?")
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

        if (this.state.loggedIn === true) {
            return <Redirect to='/projects' />
        }

        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Enter User Information</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="User Name (required)"
                            />
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password (required)"
                            />

                            <FormBtn
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            //onClick={this.loginHandle.bind(this)}
                            >
                                Login
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row><Col size="md-12">
                    {this.state.users.length ? (
                        <List>
                            {this.state.users.map(user => (
                                <ListItem key={user._id}>
                                    <Link to={"/users/" + user._id}>
                                        <strong>
                                            {user.username} and {user.password}
                                        </strong>
                                    </Link>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col></Row>
            </Container>
        );
    }
}

export default Users;