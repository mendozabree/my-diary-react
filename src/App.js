import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './components/routes';
import './assests/App.css';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
