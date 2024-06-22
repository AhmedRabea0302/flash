// Validate Phone Number
export const validatePhoneNumber = (values) => {
  const errors = {};

  debugger
  const phoneReg = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g;
  if (!phoneReg.test(values.phone_number)) {
    errors.phone_number = "Invalid Phone Number!";
  }
  
  if (values.phone_number == "") {
    errors.phone_number = "Number Linked to your flash is required";
  }
  
  return errors;
};

export default validatePhoneNumber;
