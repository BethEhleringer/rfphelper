const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    region: { type: String, required: true }

  });
  
  const Members = mongoose.model("Members", membersSchema);
  
  module.exports = Members;