import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Home from '.';

import * as ComicActions from '../../store/modules/comics/actions';

jest.mock('react-redux');
describe('home page component', () => {
  it('should try to fetch comics at load', () => {
    useSelector.mockImplementation(cb =>
      cb({
        comics: {
          comics: [],
          pagination: {
            offset: 0,
            count: 0,
            total: 0,
          },
          isLoading: false,
        },
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <MemoryRouter initialEntries={['/comic/1']}>
        <Home />
      </MemoryRouter>
    );

    expect(dispatch).toHaveBeenCalledWith(ComicActions.fetchComics(0));
  });
});
