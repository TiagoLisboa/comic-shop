import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import { Navigation, Grow, Logo } from './style';

/**
 * This function creates a component with the application header.
 * This component is connected with the cart state.
 * @returns {Object} a react component
 */
export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((size, comic) => size + comic.amount, 0)
  );

  const history = useHistory();

  /**
   * This functions change the app to home page
   */
  function goHome() {
    history.push('/');
  }

  /**
   * This functions change the app to home page
   */
  function goCart() {
    history.push('/cart');
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Logo to="/">
          <Typography variant="h5" component="h1">
            Amazing Comics
          </Typography>
        </Logo>

        <Grow />
        <Navigation>
          <li>
            <Button onClick={goHome}>Comics</Button>
          </li>
          <li>
            <IconButton
              aria-label={`show ${cartSize} cart items`}
              color="inherit"
              onClick={goCart}
            >
              <Badge badgeContent={cartSize} color="secondary">
                <FaShoppingCart />
              </Badge>
            </IconButton>
          </li>
        </Navigation>
      </Toolbar>
    </AppBar>
  );
}
