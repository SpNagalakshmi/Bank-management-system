const initialState = {
    customers: [],
  };
  
  const customerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_CUSTOMER':
        return {
          ...state,
          customers: [...state.customers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default customerReducer;
  