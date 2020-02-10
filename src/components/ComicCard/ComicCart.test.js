import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import ComicCard from '.';
import * as CartActions from '../../store/modules/cart/actions';
import * as ComicActions from '../../store/modules/comics/actions';

jest.mock('react-redux');

describe('Comic Card', () => {
  it('should be able to add a comic to the cart', () => {
    const comic = {
      image: 'bla',
      title: 'blalba',
      id: 1,
      prices: [{ price: 3.99 }],
    };
    const comic2 = {
      image: 'bla',
      title: 'blalba',
      id: 1,
      price: 3.99,
    };
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(
      <MemoryRouter>
        <ComicCard {...comic} />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('addToCart'));

    expect(dispatch).toHaveBeenCalledWith(CartActions.addComic(comic2));
  });

  it('should be able to open a comic', () => {
    const comic = {
      image: 'bla',
      title: 'blalba',
      id: 1,
      prices: [{ price: 3.99 }],
    };
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(
      <MemoryRouter>
        <ComicCard {...comic} />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('openComic'));

    expect(dispatch).toHaveBeenCalledWith(ComicActions.fetchComic(comic.id));
  });
});
