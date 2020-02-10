import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Comic from '.';

import * as ComicActions from '../../store/modules/comics/actions';
import * as CartActions from '../../store/modules/cart/actions';

const sample = {
  id: 82970,
  title: 'Marvel Previews (2017)',
  issueNumber: 0,
  description: null,
  format: '',
  pageCount: 112,
  series: {
    resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
    name: 'Marvel Previews (2017 - Present)',
  },
  dates: [
    {
      type: 'onsaleDate',
      date: '2099-01-29T00:00:00-0500',
    },
    {
      type: 'focDate',
      date: '2020-01-06T00:00:00-0500',
    },
  ],
  prices: [
    {
      type: 'printPrice',
      price: 0,
    },
  ],
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
    extension: 'jpg',
  },
};

jest.mock('react-redux');

describe('Comic Page', () => {
  it('should be able to see loading screen', () => {
    useSelector.mockImplementation(cb =>
      cb({
        comics: {
          comic: sample,
          isLoading: true,
        },
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { queryByTestId } = render(
      <MemoryRouter>
        <Comic />
      </MemoryRouter>
    );

    expect(queryByTestId('isLoading')).toBeTruthy();
  });

  it('should try to fetch comic at load', () => {
    useSelector.mockImplementation(cb =>
      cb({
        comics: {
          comic: sample,
          isLoading: false,
        },
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <MemoryRouter initialEntries={['/comic/1']}>
        <Comic />
      </MemoryRouter>
    );

    expect(dispatch).toHaveBeenCalledWith(ComicActions.fetchComic(undefined));
  });

  it('should add comic to cart', () => {
    useSelector.mockImplementation(cb =>
      cb({
        comics: {
          comic: sample,
          isLoading: false,
        },
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(
      <MemoryRouter>
        <Comic />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('addToCart'));

    expect(dispatch).toHaveBeenCalledWith(
      CartActions.addComic({
        id: sample.id,
        title: sample.title,
        image:
          'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada/portrait_incredible.jpg',
        price: sample.prices[0].price,
      })
    );
  });
});
