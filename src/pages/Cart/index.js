import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../Home/style';
import { CartList, Total } from './style';
import CartItem from '../../components/CartItem';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  const total = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

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

          <Total>
            <td colSpan="3">
              <b>TOTAL:</b>
            </td>
            <td>
              <b>$ {total.toFixed(2)}</b>
            </td>
          </Total>
        </tbody>
      </CartList>
    </Container>
  );
}
