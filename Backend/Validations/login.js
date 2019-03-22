//Sample. Will have to be updated

const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateLoginFields(data) {
  let errors = {};
  // checking if data.email is empty. If yes then set data.email=data.email else set to ""
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //Compare with isEmail in the other project
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
