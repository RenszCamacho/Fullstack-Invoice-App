import React from 'react';
import Dashboard from './index';
import { getInvoices } from '../../redux/actions/actionCreators';
import { render } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  describe('Given a getInvoice function', () => {
    describe('When is render with empty initial state', () => {
      test('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {
          initialState: {
            invoices: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: true,
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }],
            user: {
              toke: 'token'
            }
          }
        });
      });

      test('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {

          initialState: {
            invoices: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: false,
              from: {
                address: { postCode: 'postCode' }
              },
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }],
            user: {
              toke: 'token'
            },
            accesstoken: {
              user: { postCode: 'postCode' }
            }
          }

        });
      });

      test('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {

          initialState: {
            invoices: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: true,
              from: {
                address: { postCode: 'postCode' }
              },
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }],
            user: {
              toke: 'token'
            },
            accesstoken: {
              user: { postCode: 'postCode' }
            }
          }

        });
      });

      test('Then should call getInvoice', () => {
        getInvoices.mockReturnValueOnce({ type: '' });

        render(<Dashboard />, {

          initialState: {
            invoices: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: false,
              from: {
                address: { postCode: 'postCode1' }
              },
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }],
            user: {
              toke: 'token'
            },
            accesstoken: {
              user: { postCode: 'postCode' }
            }
          }

        });
      });
    });
  });
});
