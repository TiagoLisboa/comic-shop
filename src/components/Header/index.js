import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import { Container, Navigation } from './style';

export default function Header() {
  return (
    <Container>
      <div>Logo</div>
      <Navigation>
        <li>
          <Link to="/">Comics</Link>
        </li>
        <li>
          <Link to="/cart">
            {3} <FaShoppingCart />
          </Link>
        </li>
      </Navigation>
    </Container>
  );
}
