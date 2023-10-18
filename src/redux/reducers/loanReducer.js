const initialState = {
    loans: [],
  };
  
  const loanReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'APPLY_LOAN':
        return {
          ...state,
          loans: [...state.loans, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default loanReducer;
  