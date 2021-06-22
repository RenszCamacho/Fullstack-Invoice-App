import React from 'react';
import Details from './index';
import { getOneInvoice, markAsPaid } from '../../redux/actions/actionCreators';
import { render, fireEvent, screen } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');
global.scrollTo = jest.fn();

describe('Dashboard component', () => {
  describe('Given a getOneInvoice function', () => {
    describe('When toggle button is clicked', () => {
      test('Then call markAsPaid function', () => {
        getOneInvoice.mockReturnValueOnce({ type: '' });
        markAsPaid.mockReturnValueOnce({ type: '' });
        render(<Details />, {
          initialState: {
            invoice: {
              _id: '64264262',
              paymentTerms: 'terms',
              status: false,
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }
          }
        });
        fireEvent.click(screen.getByTestId('toggle-button'));
        expect(markAsPaid).toHaveBeenCalled();
      });
    });

    // describe('When toggle button is clicked', () => {
    //   test('Then call markAsPaid function', () => {
    //     getOneInvoice.mockReturnValueOnce({ type: '' });
    //     markAsPaid.mockReturnValueOnce({ type: '' });
    //     render(<Details />, {
    //       initialState: {
    //         invoice: {
    //           _id: '64264262',
    //           paymentTerms: 'terms',
    //           status: false,
    //           to: { name: 'sara' },
    //           items: [{ total: 4 }]
    //         }
    //       }
    //     });
    //     fireEvent.click(screen.getByTestId('delete-button'));
    //     expect(markAsPaid).toHaveBeenCalled();
    //   });
    // });

    describe('When is render with the initial state', () => {
      test('Then should call getOneInvoice', () => {
        getOneInvoice.mockReturnValueOnce({ type: '' });

        render(<Details />, {
          initialState: {
            invoice: {
              _id: '64264262',
              paymentTerms: 'terms',
              status: true,
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }
          }
        });
      });
    });
  });
});
