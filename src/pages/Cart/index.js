import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../Home/style';
import { CartList } from './style';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <Container>
      <CartList>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(comic => (
            <CartItem key={comic.id} {...comic} />
          ))}
        </tbody>
      </CartList>
    </Container>
  );
}
