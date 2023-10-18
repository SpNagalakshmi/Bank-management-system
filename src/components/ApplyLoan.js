// ApplyLoan.js
import React, { useState, useEffect } from 'react';
import './CustomerRegistration.css';
import { useNavigate } from 'react-router-dom';

const ApplyLoan = () => {
  const [formData, setFormData] = useState({
    loanType: 'Education',
    loanAmount: '10000',
    loanApplyDate: '2023-10-10',
    interestRate: '5',
    loanDuration: '5',
    courseFee: '8000',
    course: 'Engineering',
    fatherName: 'John Doe',
    fatherOccupation: 'Engineer',
    annualIncome: '50000',
    companyName: '',
    designation: '',
    totalExp: '',
    expWithCurrentCompany: '',
    accountHolderName: '' 
  });

  
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    loanType: '',
    loanAmount: '',
    loanApplyDate: '',
    interestRate: '',
    loanDuration: '',
    courseFee: '',
    course: '',
    fatherName: '',
    fatherOccupation: '',
    annualIncome: '',
    companyName: '',
    designation: '',
    totalExp: '',
    expWithCurrentCompany: '',
    accountHolderName: '' 
  });

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const updatedErrors = { ...errors };
  
    if (formData.loanApplyDate < currentDate) {
      updatedErrors.loanApplyDate =
        'Loan apply date should not be lesser than the system date';
    } else {
      updatedErrors.loanApplyDate = '';
    }
  
    setErrors(updatedErrors);
  }, [formData.loanApplyDate]);
  
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const nameRegex = /^[a-zA-Z\s]+$/;
const currentDate = new Date().toISOString().split('T')[0];
const handleSubmit = (e, nameRegex, currentDate) => {
  e.preventDefault();
  e.persist();
  console.log('Button clicked');

  // Check for validations
  if (!formData.accountHolderName.match(nameRegex)) {
    setErrors({
      ...errors,
      accountHolderName: 'Account holder name should contain only alphabets and spaces',
    });
    return;
  } else {
    setErrors({
      ...errors,
      accountHolderName: '',
    });
  }

  if (formData.loanApplyDate < currentDate) {
    setErrors({
      ...errors,
      loanApplyDate: 'Loan apply date should not be lesser than the system date',
    });
    return;
  } else {
    setErrors({
      ...errors,
      loanApplyDate: '',
    });
  }

  // Show alert and navigate
  if (!errors.accountHolderName && !errors.loanApplyDate) {
    alert('Loan applied successfully');
    navigate('/deposit-amount');
  }

  console.log('Navigated to /deposit-amount');
};


  
  

  return (
    <div className="registration-container">
      <h2>Apply Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <input
            type="text"
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            placeholder="Loan Type"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Loan Amount"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="loanApplyDate"
            value={formData.loanApplyDate}
            onChange={handleChange}
            required
          />
          {errors.loanApplyDate && (
            <span className="error">{errors.loanApplyDate}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            placeholder="Interest Rate"
            required
          />
        </div>
        <div className="form-group">
          <select
            name="loanDuration"
            value={formData.loanDuration}
            onChange={handleChange}
            required
          >
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
          </select>
        </div>
        {formData.loanType === 'Education' && (
          <div>
            <div className="form-group">
              <input
                type="number"
                name="courseFee"
                value={formData.courseFee}
                onChange={handleChange}
                placeholder="Course Fee"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Course"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father's Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                placeholder="Father's Occupation"
                required
              />
            </div>
          </div>
        )}
        {formData.loanType === 'Personal' && (
          <div>
            <div className="form-group">
              <input
                type="number"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                placeholder="Annual Income"
                required
              />
            </div>
          </div>
        )}
        {formData.loanType === 'Home' && (
          <div>
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="totalExp"
                value={formData.totalExp}
                onChange={handleChange}
                placeholder="Total Experience (in years)"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="expWithCurrentCompany"
                value={formData.expWithCurrentCompany}
                onChange={handleChange}
                placeholder="Experience with Current Company (in years)"
                required
              />
            </div>
          </div>
        )}
        <div className="form-group">
          <button type="submit" >Apply</button>
        </div>
      </form>
    </div>
  );
        };  

export default ApplyLoan;
