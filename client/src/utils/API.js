import axios from "axios";

export default {
  // Gets all books
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the book with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the book with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a book to the database
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
