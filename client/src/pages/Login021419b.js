import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Nav from '../components/Nav';
//import Signup from './components/sign-up'
import LoginForm from '../components/LoginForm'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//MAKE THE LOGINFORM COMPONENT!
//MAKE THE SIGNUP PAGE!
import { Input, FormBtn } from "../components/Form";
import Axios from "axios";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
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
//QUESTION: SHOULD LINE 40 etc BE MEMBER or MEMBERS? GO BACK AND CHECK!
getMember() {
    Axios.get('api/members/').then(response => {
        console.log('Get member response: ')
        console.log(response.data)
        if (response.data.members) {
            console.log("Get Member: There is a member saved in the server session: ")

            this.setState({
                loggedIn: true,
                username: response.data.members.username
            })
        } else {
            console.log("Get member: no member");
            this.setState({
                loggedIn: false,
                username: null
            })
        }
    })
}

render() {
    return (
        <div>
        
        <Nav updateMember={this.updateMember} loggedIn={this.state.loggedIn} />
       

        <LoginForm updateMember={this.updateMember} />   
            
           </div>

    );
}
}
    
export default Login;