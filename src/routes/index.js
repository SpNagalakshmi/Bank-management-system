import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomerRegistration from '../components/CustomerRegistration';
import ApplyLoan from '../components/ApplyLoan';
import DepositAmount from '../components/DepositAmount';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/customer-registration">Customer Registration</Link>
            </li>
            <li>
              <Link to="/apply-loan">Apply Loan</Link>
            </li>
            <li>
              <Link to="/deposit-amount">Deposit Amount</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customer-registration" component={CustomerRegistration} />
          <Route path="/apply-loan" component={ApplyLoan} />
          <Route path="/deposit-amount" component={DepositAmount} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
