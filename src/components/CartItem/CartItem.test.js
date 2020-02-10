import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import CartItem from '.';
import * as CartActions from '../../store/modules/cart/actions';

jest.mock('react-redux');

describe('Cart Item', () => {
  it('should be able to increase product amount', () => {
    const comic = {
      id: 1,
      title: 'blabla',
      amount: 1,
      image: 'urll',
      price: 3.99,
    };

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<CartItem {...comic} />);

    fireEvent.click(getByTestId('increaseAmount'));

    expect(dispatch).toHaveBeenCalledWith(
      CartActions.updateAmount(comic.id, comic.amount + 1)
    );
  });

  it('should be able to decrease product amount', () => {
    const comic = {
      id: 1,
      title: 'blabla',
      amount: 2,
      image: 'urll',
      price: 3.99,
    };

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<CartItem {...comic} />);

    fireEvent.click(getByTestId('decreaseAmount'));

    expect(dispatch).toHaveBeenCalledWith(
      CartActions.updateAmount(comic.id, comic.amount - 1)
    );
  });

  it('should be able to remove product from cart', () => {
    const comic = {
      id: 1,
      title: 'blabla',
      amount: 2,
      image: 'urll',
      price: 3.99,
    };

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<CartItem {...comic} />);

    fireEvent.click(getByTestId('remove'));

    expect(dispatch).toHaveBeenCalledWith(CartActions.removeComic(comic.id));
  });
});
