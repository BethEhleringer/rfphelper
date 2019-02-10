import axios from "axios";

export default {

    //gets all members
    getMembers: function (memberData) {
      return axios.get("/api/members", memberData);
    },
    //gets a member with the given id
    getMember: function (id) {
      return axios.get("/api/members/" + id);
    },
  //deletes a member with the given id
    deleteMember: function (id) {
      return axios.delete("/api/members/" + id);
    },
  //saves a new member
    saveMember: function (memberData) {
      return axios.post("/api/members", memberData)
    },

  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },

  //gets all users
  getUsers: function (userData) {
    return axios.get("/api/users", userData);
  },
  //gets a user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  saveUser: function (userData) {
    return axios.post("/api/users", userData)
  }
};
