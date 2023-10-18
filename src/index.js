import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootStyles = {
  backgroundColor: 'cornflowerblue',
  height: '100vh',  // Set height to 100% of the viewport height
};

ReactDOM.render(
  <Provider store={store}>
    <div style={rootStyles}>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
