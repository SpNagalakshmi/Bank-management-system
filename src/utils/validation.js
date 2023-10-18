export const validateEmail = (email) => {
    // Basic email validation, you can implement a more robust check
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePhoneNumber = (phone) => {
    // Basic phone number validation, you can implement a more robust check
    const re = /^\d{10}$/;
    return re.test(phone);
  };
  
  export const validateDOB = (dob) => {
    // Basic date of birth validation, you can implement a more robust check
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(dob);
  };
  