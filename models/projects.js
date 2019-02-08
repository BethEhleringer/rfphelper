const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    projectName: { type: String, required: true },
    team: { type: Array, required: true },
    startDate: String,
    endDate: Date,
    sector: String,
    cost: Number,
    size: Number,
    type: String,
    challenges: String,
    strengths: String
  });
  
  const Projects = mongoose.model("Projects", projectsSchema);
  
  module.exports = Projects;