import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NewForm from './index';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import '@testing-library/jest-dom';

jest.mock('../../../redux/actions/actionCreators');

global.scrollTo = jest.fn();

describe('EditForm component', () => {
  describe('Given a login form', () => {
    describe('When is submitted', () => {
      test('then should receive email and password', () => {
        render(
          <BrowserRouter>
            <NewForm />
          </BrowserRouter>,

          {
            initialState: {
              invoices: [{
                street: '',
                city: '',
                postCode: ''
              }]
            }
          }
        );

        const street = screen.getByTestId('street');
        const city = screen.getByTestId('city');
        const postCode = screen.getByTestId('postCode');
        fireEvent.change(street, { target: { value: 'Endymion Road' } });
        fireEvent.change(city, { target: { value: 'London' } });
        fireEvent.change(postCode, { target: { value: 'SW2 2BU' } });
        expect(street).toBeInTheDocument();
        expect(city).toBeInTheDocument();
        expect(postCode).toBeInTheDocument();
      });
    });
  });
});
