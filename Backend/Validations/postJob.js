const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostJobFields(data) {
  let errors = {};
  var jobId;
  if (data.jobId === 0) jobId = "";
  else {
    jobId = data.jobId.toString();
  }
  data.jobId = !isEmpty(jobId) ? jobId : "";
  data.jobTitle = !isEmpty(data.jobTitle) ? data.jobTitle : "";
  data.jobDescription = !isEmpty(data.jobDescription)
    ? data.jobDescription
    : "";
  data.industry = !isEmpty(data.industry) ? data.industry : "";
  data.employmentType = !isEmpty(data.employmentType)
    ? data.employmentType
    : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.companyName = !isEmpty(data.companyName) ? data.companyName : "";
  data.easyApply = !isEmpty(data.easyApply) ? data.easyApply : "";

  if (Validator.isEmpty(jobId)) {
    errors.jobId = "JobId field is required";
  }

  if (Validator.isEmpty(data.jobTitle)) {
    errors.jobTitle = "Job title field is required";
  }

  if (Validator.isEmpty(data.jobDescription)) {
    errors.jobDescription = "Job Description field is required";
  }

  if (Validator.isEmpty(data.industry)) {
    errors.industry = "Industry field is required";
  }

  if (Validator.isEmpty(data.employmentType)) {
    errors.employmentType = "Employment Type field is required";
  }

  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = "Company Name field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }

  if (Validator.isEmpty(data.easyApply)) {
    errors.easyApply = "EasyApply field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
