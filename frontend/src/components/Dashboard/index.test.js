/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { getInvoices } from '../../redux/actions/actionCreators';
import { render } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  describe('Given a getInvoice function', () => {
    describe('When is render with empty initial state', () => {
      test.only('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {
          initialState: {
            invoices: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: true,
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }]
          }
        });
      });

      test.only('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {
          initialState: {
            invoices: [{
              _id: '64264262', paymentTerms: 'terms', status: false, to: { name: 'sara' }, items: [{ total: 4 }]
            }]
          }
        });
      });

      // expect(screen.getByText(//i))
    });
  });
});
