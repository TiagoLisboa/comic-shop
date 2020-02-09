import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import { Container, Navigation } from './style';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((size, comic) => size + comic.amount, 0)
  );
  return (
    <Container>
      <div>Logo</div>
      <Navigation>
        <li>
          <Link to="/">Comics</Link>
        </li>
        <li>
          <Link to="/cart">
            {cartSize} <FaShoppingCart />
          </Link>
        </li>
      </Navigation>
    </Container>
  );
}
