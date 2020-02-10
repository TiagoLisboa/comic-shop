import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../Home/style';
import { CartList, Total } from './style';
import CartItem from '../../components/CartItem';

/**
 * This function creates a component for the Cart page.
 * This component is connected to the cart state.
 * @returns {Object} a React component.
 */
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
