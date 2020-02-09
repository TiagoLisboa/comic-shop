import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../Home/style';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <Container>
      <ul>
        {cart.map(comic => (
          <CartItem key={comic.id} {...comic} />
        ))}
      </ul>
    </Container>
  );
}
