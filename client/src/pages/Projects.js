import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
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
              <TextArea
                value={this.state.challenges}
                onChange={this.handleInputChange}
                name="challenges"
                placeholder="Challenges (Optional)"
              />
              <FormBtn
                disabled={!(this.state.projectName && this.state.team)}
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Projects</h1>
            </Jumbotron>
            {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <Link to={"/projects/" + project._id}>
                      <strong>
                        {project.title} by {project.team}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProject(project._id)} />
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

export default Projects;
