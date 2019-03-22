//Sample. HAs to be deleted or modified

const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSignUpFields(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isLength(data.firstName, { min: 3, max: 30 })) {
    errors.firstName = "First Name must be between 3 and 30 characters";
  }

  if (!Validator.isLength(data.lastName, { min: 3, max: 30 })) {
    errors.lastName = "Last Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
