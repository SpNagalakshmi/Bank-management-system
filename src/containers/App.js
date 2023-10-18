import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomerRegistration from '../components/CustomerRegistration';
import ApplyLoan from '../components/ApplyLoan';
import DepositAmount from '../components/DepositAmount';

const App = () => {
  const appStyles = {
    textAlign: 'center',
    backgroundColor: 'cornflowerblue',
    padding: '20px'
  };

  const headingStyles = {
    marginBottom: '20px'
  };

  return (
    <Router>
      <div style={appStyles}>
        <h1 style={headingStyles}>Welcome to Bank Management System</h1>
        <Routes>
          <Route path="/customer-registration" element={<CustomerRegistration />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/deposit-amount" element={<DepositAmount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
