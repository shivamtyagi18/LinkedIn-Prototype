const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateApplicant(data) {
  let errors = {};
  let zipFlag = /^[0-9]{5}(?:-[0-9]{4})?$/.test(data.zipcode);
  let phoneFlag = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(data.phone);

  data.zipcode = zipFlag ? data.zipcode : "";
  data.phone = phoneFlag ? data.phone : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  data.city = !isEmpty(data.city) ? data.city : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.headline = !isEmpty(data.headline) ? data.headline : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.education = !isEmpty(data.education) ? data.education : "";

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name field is required";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name field is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "City field is required";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State field is required";
  }

  if (data.zipcode === "")
    errors.zipcode = "Zip code pattern: xxxxx or xxxxx-xxxx";

  if (data.phone === "") errors.phone = "Phone Number Pattern: xxx-xxx-xxxx";

  if (Validator.isEmpty(data.headline)) {
    errors.headline = "Headline field is required";
  }

  if (Validator.isEmpty(data.country)) {
    errors.country = "Country field is required";
  }

  if (Validator.isEmpty(data.education)) {
    errors.education = "Education field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
