import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Members extends Component {
    state = {
        members: [],
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        region: "",
        role: ""
    };

    componentDidMount() {
        this.loadMembers();
    }

    loadMembers = () => {
        API.getMembers()
            .then(res =>
                this.setState({ members: res.data, firstname: "", lastname: "", username: "", email: "", password: "", region: "", role: "" })
            )
            .catch(err => console.log(err));
    };

    deleteMembers = id => {
        API.deleteMember(id)
            .then(res => this.loadMembers())
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
            API.saveMember({
                firstame: this.state.firstname,
                lastname: this.state.lastname,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                region: this.state.region,
                role: this.state.role
            })
                .then(res => this.loadMembers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Add Staff or Field Partner</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                name="firstname"
                                placeholder="First Name"
                            />
                            <Input
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                                name="lastname"
                                placeholder="Last Name"
                            />
                             <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email"
                            />                           
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password"
                            />
                             <Input
                                value={this.state.region}
                                onChange={this.handleInputChange}
                                name="region"
                                placeholder="Region (HQ, EUGB, LA, AF, AS, NAME)"
                                />                           
                            <Input
                                value={this.state.role}
                                onChange={this.handleInputChange}
                                name="role"
                                placeholder="Role (FP, MKTG, HR}"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
              </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Staff and Field Partners</h1>
                        </Jumbotron>
                        {this.state.members.length ? (
                            <List>
                                {this.state.members.map(member => (
                                    <ListItem key={member._id}>
                                        <Link to={"/members/" + member._id}>
                                            <strong>
                                                {member.firstname} {member.lastname}, {member.role}, {member.region}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteMember(member._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Members;
