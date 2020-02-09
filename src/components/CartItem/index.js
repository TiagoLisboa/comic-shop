import React from 'react';
import { useDispatch } from 'react-redux';

import { updateAmount } from '../../store/modules/cart/actions';

export default function CartItem(comic) {
  const dispatch = useDispatch();

  console.log(comic);

  function addAmount() {
    dispatch(updateAmount(comic.id, comic.amount + 1));
  }

  function removeAmount() {
    dispatch(updateAmount(comic.id, comic.amount - 1));
  }

  const { image, title, amount, price } = comic;
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <b>{title}</b>
      </div>
      <div>
        <button onClick={removeAmount}>-</button>
        <input value={amount} type="number" readOnly />
        <button onClick={addAmount}>+</button>
      </div>
      <div>
        <span>{price}</span>
      </div>
    </li>
  );
}
