import { createStore, combineReducers } from 'redux';
import customerReducer from './reducers/customerReducer';
import loanReducer from './reducers/loanReducer';
import accountReducer from './reducers/accountReducer';

const rootReducer = combineReducers({
  customer: customerReducer,
  loan: loanReducer,
  account: accountReducer,
});

const store = createStore(rootReducer);

export default store;
