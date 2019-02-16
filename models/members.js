const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define membersSchema
const membersSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  region: { type: String, required: true }

});

// Define schema methods
membersSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
membersSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/members.js hashPassword in pre save');

    this.password = this.hashPassword(this.password)
    next()
  }
})

const Members = mongoose.model("Members", membersSchema);

module.exports = Members