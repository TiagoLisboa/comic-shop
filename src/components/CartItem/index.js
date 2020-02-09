import React from 'react';

export default function CartItem({ title, price, amount, image }) {
  function updateAmount(amount) {}
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <b>{title}</b>
      </div>
      <div>
        <input value={amount} type="number" onChange={updateAmount} />
      </div>
      <div>
        <span>{price}</span>
      </div>
    </li>
  );
}
