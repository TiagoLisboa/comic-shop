import React from 'react';
import { useDispatch } from 'react-redux';
import { FaPlusCircle, FaMinusCircle, FaTrash } from 'react-icons/fa';
import { IconButton } from '@material-ui/core';

import { updateAmount, removeComic } from '../../store/modules/cart/actions';

import { Item } from './style';

/**
 * This function creates a CartItem component.
 * This component is a styled tr with the comic information.
 * @params {Object} comic is a comic object
 * @returns {Object} a React component
 */
export default function CartItem(comic) {
  const dispatch = useDispatch();

  /**
   * This function dispatches an action to adds one to the comic amount.
   */
  function addAmount() {
    dispatch(updateAmount(comic.id, comic.amount + 1));
  }

  /**
   * This function dispatches an action to remove comic from cart.
   */
  function handleRemove() {
    dispatch(removeComic(comic.id));
  }

  /**
   * This function dispatches an action to remove one from the comic amount.
   */
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
        <button onClick={removeAmount} data-testid="decreaseAmount">
          <FaMinusCircle />
        </button>
        <input value={amount} readOnly />
        <button onClick={addAmount} data-testid="increaseAmount">
          <FaPlusCircle />
        </button>
      </td>
      <td>
        <b>$ {price.toFixed(2)}</b>
      </td>
      <td>
        <IconButton onClick={handleRemove} data-testid="remove">
          <FaTrash />
        </IconButton>
      </td>
    </Item>
  );
}
