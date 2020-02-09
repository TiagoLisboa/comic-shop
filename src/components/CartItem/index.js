import React from 'react';
import { useDispatch } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { updateAmount } from '../../store/modules/cart/actions';

import { Item } from './style';

export default function CartItem(comic) {
  const dispatch = useDispatch();

  function addAmount() {
    dispatch(updateAmount(comic.id, comic.amount + 1));
  }

  function removeAmount() {
    dispatch(updateAmount(comic.id, comic.amount - 1));
  }

  const { image, title, amount, price } = comic;

  return (
    <Item>
      <td>
        <img src={image} alt={title} />
      </td>
      <td>
        <b>{title}</b>
      </td>
      <td>
        <button onClick={removeAmount}>
          <FaMinusCircle />
        </button>
        <input value={amount} readOnly />
        <button onClick={addAmount}>
          <FaPlusCircle />
        </button>
      </td>
      <td>
        <b>$ {price.toFixed(2)}</b>
      </td>
    </Item>
  );
}
