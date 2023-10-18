const initialState = {
    accounts: [],
  };
  
  const accountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DEPOSIT_AMOUNT':
        return {
          ...state,
          accounts: [...state.accounts, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default accountReducer;
  