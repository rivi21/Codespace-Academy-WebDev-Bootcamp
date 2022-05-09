const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const validRoles = {
  values: ["ADMIN","USER"],
  message: "{VALUE} is an invalid role"
};

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER",
  },
  state: {
    //Not required
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("User", userSchema);
