// Loan Actions
export const applyLoan = (loanData) => {
    return {
      type: 'APPLY_LOAN',
      payload: loanData,
    };
  };
  