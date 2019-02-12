import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


import { Input, FormBtn } from "../components/Form";

class Members extends Component {
    state = {
        members: [],
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

    hrRedirect = () => {
        return <Redirect to='/members' />
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

    //end local strategy

    render() {
        if (this.state.username === "sbrown" && this.state.password === "12345.0") {
            return <Redirect to= '/members' />
        }
        else if (this.state.loggedIn === true) {
            return <Redirect to='/projects' />
        }

        return (
            <div className="container"> 
            <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-lg-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
                    <div className="card">
                    <div className="card-header">
                     
                            <h1>Login</h1>
                     </div>
                     <div className="card-body">
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
                        </form></div>
                        </div> </div></div></div>
                    
               
               
           
        );
    }
}

export default Members;