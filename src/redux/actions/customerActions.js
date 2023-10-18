// Customer Actions
export const registerCustomer = (customerData) => {
    return {
      type: 'REGISTER_CUSTOMER',
      payload: customerData,
    };
  };
  