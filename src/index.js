import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import state from './redux/store';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider state={state}>
      <App />
    </Provider>
  </React.StrictMode>
);
