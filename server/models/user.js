const { Schema, model } = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtKey = process.env.jwtKey;
const jwtExpires = process.env.jwtExpires;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Email is invalid"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, jwtKey, { expiresIn: jwtExpires });
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, jwtKey, { expiresIn: 31536000 });
};

userSchema.methods.comparePwd = async function (pwd) {
  return await bcrypt.compare(pwd, this.password);
};

module.exports = model("User", userSchema);
