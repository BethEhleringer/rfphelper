import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Users extends Component {
    state = {
        users: [],
        username: '',
        password: ''


    };
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


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveUsers({
                username: this.state.username,
                password: this.state.password
            }).then(console.log(this.state.username))
                //.then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
    };

    render() {
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
                                value={this.state.passport}
                                onChange={this.handleInputChange}
                                name="passport"
                                placeholder="Passport (required)"
                            />

                            <FormBtn
                                disabled={!(this.state.username && this.state.passport)}
                                onClick={this.handleFormSubmit}>
                                Login
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Users;