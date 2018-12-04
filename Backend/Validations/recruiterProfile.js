const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRecruiterProfile(data) {
  let errors = {};
  let zipFlag = /^[0-9]{5}(?:-[0-9]{4})?$/.test(data.zipCode);
  let phoneFlag = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(data.phoneNumber);
  console.log("Zip code received is: ", data.zipCode);
  //if (data.phone == /(^d{3}-d{3}-d{4}$)/) phoneFlag = true;

  //if (data.zipCode == /(^\d{5}$)|(^\d{5}-\d{4}$)/) zipFlag = true;

  console.log("phone Flag is: ", phoneFlag);
  data.zipCode = zipFlag ? data.zipCode : "";
  data.phone = phoneFlag ? data.phoneNumber : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  data.city = !isEmpty(data.city) ? data.city : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.state = !isEmpty(data.state) ? data.state : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company Name field is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (data.zipCode === "")
    errors.zipCode = "Zip code pattern: xxxxx or xxxxx-xxxx";

  if (data.phoneNumber === "")
    errors.phoneNumber = "Phone Number Pattern: xxx-xxx-xxxx";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
