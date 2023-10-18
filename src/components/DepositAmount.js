import React, { useState } from 'react';
import './CustomerRegistration.css';
import { useNavigate } from 'react-router-dom';

const DepositAmount = () => {
  const [formData, setFormData] = useState({
    accountType: 'Savings',
    depositAmount: '1000',
    availablebalance: '1,00,000'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for deposit amount
    const depositAmount = parseFloat(formData.depositAmount.replace(/,/g, ''));
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('Deposit amount should be a numeric value greater than zero.');
      return;
    }

    // Update available balance and show success message
    const updatedBalance = parseFloat(formData.availablebalance.replace(/,/g, '')) + depositAmount;
    setFormData({
      ...formData,
      availablebalance: updatedBalance.toLocaleString('en-IN') // Format as currency
    });

    alert(`Deposit successful! Available Balance: ₹${updatedBalance.toLocaleString('en-IN')}`);
  };
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate('/customer-registration'); // Redirect to customer registration
  };
  return (
    <div className="registration-container">
      <h2>Deposit Amount</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            placeholder="Account Type"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleChange}
            placeholder="Deposit Amount"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="availablebalance"
            value={formData.availablebalance}
            onChange={handleChange}
            placeholder="Available Balance"
            required
            readOnly // To prevent user from editing
          />
        </div>
        <button type="submit">Deposit</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DepositAmount;
