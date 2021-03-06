import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Comic from './pages/Comic';

/**
 * This function creates the app Routes component
 * @returns {Object} a react component with all the routes
 */
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/comics/:page" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/comic/:id" component={Comic} />
    </Switch>
  );
}
