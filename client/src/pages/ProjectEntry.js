import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Projects extends Component {
    state = {
        projects: [],
        projectName: "",
        team: "",
        startDate: "",
        endDate: "",
        sector: "",
        cost: "",
        size: "",
        type: "",
        challenges: "",
        strengths: ""
    };

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        API.getProjects()
            .then(res =>
                this.setState({ projects: res.data, projectName: "", team: "", startDate: "", endDate: "", sector: "", cost: "", size: "", type: "", challenges: "", strengths: "" })
            )
            .catch(err => console.log(err));
    };

    deleteProject = id => {
        API.deleteProject(id)
            .then(res => this.loadProjects())
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
        if (this.state.projectName && this.state.team) {
            API.saveProject({
                projectName: this.state.projectName,
                team: this.state.team,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                sector: this.state.sector,
                cost: this.state.cost,
                size: this.state.size,
                type: this.state.type,
                challenges: this.state.challenges,
                strengths: this.state.strengths
            })
                .then(res => this.loadProjects())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Enter Project Information</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.projectName}
                                onChange={this.handleInputChange}
                                name="projectName"
                                placeholder="Project Name (required)"
                            />
                            <Input
                                value={this.state.team}
                                onChange={this.handleInputChange}
                                name="team"
                                placeholder="Team (required)"
                            />
                            <Input
                                value={this.state.startDate}
                                onChange={this.handleInputChange}
                                name="startdate"
                                placeholder="Start Date"
                            />
                            <Input
                                value={this.state.endDate}
                                onChange={this.handleInputChange}
                                name="enddate"
                                placeholder="End Date"
                            />
                            <Input
                                value={this.state.sector}
                                onChange={this.handleInputChange}
                                name="sector"
                                placeholder="Sector"
                            />
                            <Input
                                value={this.state.cost}
                                onChange={this.handleInputChange}
                                name="cost"
                                placeholder="Cost"
                            />
                            <Input
                                value={this.state.size}
                                onChange={this.handleInputChange}
                                name="size"
                                placeholder="Size"
                            />
                            <Input
                                value={this.state.type}
                                onChange={this.handleInputChange}
                                name="type"
                                placeholder="Construction Type"
                            />
                            <TextArea
                                value={this.state.challenges}
                                onChange={this.handleInputChange}
                                name="challenges"
                                placeholder="Challenges (Optional)"
                            />
                            <TextArea
                                value={this.state.strengths}
                                onChange={this.handleInputChange}
                                name="strengths"
                                placeholder="Strengths (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.projectName && this.state.team)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Project
              </FormBtn>
                        </form>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
}

export default Projects;
