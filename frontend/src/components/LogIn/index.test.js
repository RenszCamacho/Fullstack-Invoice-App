import React from 'react';
import LogIn from './index';
import { logIn } from '../../redux/actions/actionCreators';
import { render, screen, fireEvent } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('LogIn component', () => {
  describe('Given a logIn function', () => {
    describe('When is render with empty initial state', () => {
      test('Then should logIn', () => {
        logIn.mockReturnValueOnce({ type: '' });

        render(<LogIn />, {
          initialState: {
            user: {}
          }
        });

        const email = screen.getByTestId('data-email');
        const password = screen.getByTestId('data-password');
        const buttonLogin = screen.getByTestId('data-button');

        fireEvent.change(email, { target: { value: 'newValue' } });
        fireEvent.change(password, { target: { value: 'newValue' } });
        fireEvent.click(buttonLogin);

        expect(logIn).toHaveBeenCalled();
      });

      test('Then should call getInvoice', () => {
        logIn.mockReturnValueOnce({ type: '' });

        render(<LogIn />, {
          initialState: {
            user: {
              token: 'token'
            }
          }
        });

        const email = screen.getByTestId('data-email');
        const password = screen.getByTestId('data-password');
        const buttonLogin = screen.getByTestId('data-button');

        fireEvent.change(email, { target: { value: 'newValue' } });
        fireEvent.change(password, { target: { value: 'newValue' } });
        fireEvent.click(buttonLogin);
      });
    });
  });
});
