import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * this function creates the root app component
 * @returns {Object} a react component
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
