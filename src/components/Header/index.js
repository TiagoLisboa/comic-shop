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

import { FaShoppingCart } from 'react-icons/fa';

import { Navigation, Grow } from './style';

/**
 * This function creates a component with the application header.
 * This component is connected with the cart state.
 * @returns {Object} a react component
 */
export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((size, comic) => size + comic.amount, 0)
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" component="h1">
          Amazing Comics
        </Typography>
        <Grow />
        <Navigation>
          <li>
            <Button href="/">Comics</Button>
          </li>
          <li>
            <IconButton
              aria-label={`show ${cartSize} cart items`}
              color="inherit"
              href="/cart"
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
