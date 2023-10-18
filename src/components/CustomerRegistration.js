import React, { useState } from 'react';
import './CustomerRegistration.css';
import { useNavigate } from 'react-router-dom';

const CustomerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    address: '',
    country: 'Country',
    state: 'State',
    emailAddress: '',
    contactNo: '',
    dob: '1990-01-01',
    accountType: 'Savings',
    branchName: 'Main Branch',
    initialDeposit: '5000',
    idProofType: 'Passport',
    idProofDocument: 'ABC123XYZ',
  });
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleSubmit = (e) => {
  e.preventDefault();

  // Validation for name (only alphabets and spaces)
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!formData.name.match(nameRegex)) {
    alert('Name should contain only alphabets and spaces');
    return;
  }

  // Validation for contactNo (10 digits only)
  const contactNoRegex = /^\d{10}$/;
  if (!formData.contactNo.match(contactNoRegex)) {
    alert('Contact number should be 10 digits only');
    return;
  }

  // Validation for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.emailAddress.match(emailRegex)) {
    alert('Invalid email address');
    return;
  }

  // Calculate age based on dob
  const dob = new Date(formData.dob);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();

  // Identify citizen status
  let citizenStatus;
  if (age >= 60) {
    citizenStatus = 'Senior Citizen';
  } else if (age >= 18) {
    citizenStatus = 'Citizen';
  } else {
    citizenStatus = 'Minor';
  }

  // Identify interest based on age
  let interest;
  if (age >= 60) {
    interest = 'Senior Citizen Interest Rate';
  } else if (age >= 18) {
    interest = 'Regular Interest Rate';
  } else {
    interest = 'Minor Interest Rate';
  }

  // Update formData with citizenStatus and interest
  const updatedFormData = {
    ...formData,
    age,
    citizenStatus,
    interest,
  };
  localStorage.setItem('user', JSON.stringify(formData));

  console.log(formData);

    setRegistered(true);
    alert('Registration successful. You can now login.');
};


const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const { username, password } = formData;

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful');
    //   history.push('/apply-loan');
      navigate('/apply-loan');
      // Redirect or do something after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="registration-container">
         {!registered && (
            <>
      <h2>Customer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="Savings">Savings</option>
            <option value="Salary">Salary</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            placeholder="Branch Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="initialDeposit"
            value={formData.initialDeposit}
            onChange={handleChange}
            placeholder="Initial Deposit"
            required
          />
        </div>
        <div className="form-group">
          <select
            name="idProofType"
            value={formData.idProofType}
            onChange={handleChange}
            required
          >
            <option value="Passport">Passport</option>
            <option value="Driver's License">Driver's License</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="Voter ID">Voter ID</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="idProofDocument"
            value={formData.idProofDocument}
            onChange={handleChange}
            placeholder="ID Proof Document"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </>
      )}
      {registered && (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CustomerRegistration;
