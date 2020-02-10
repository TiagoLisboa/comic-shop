import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Cart from '.';

jest.mock('react-redux');

describe('Cart component', () => {
  it('should calculate the correct total', () => {
    useSelector.mockImplementation(cb =>
      cb({
        cart: [
          {
            id: 1,
            title: 'Amazing Tiago Caio',
            image: 'url',
            price: 3,
            amount: 2,
          },
          {
            id: 2,
            title: 'The Lisboas',
            image: 'url',
            price: 5,
            amount: 1,
          },
        ],
      })
    );

    const { getByTestId } = render(<Cart />);

    expect(getByTestId('total').textContent).toBe('$ 11.00');
  });
});
