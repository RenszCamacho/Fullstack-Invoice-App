import invoicesReducer from './invoicesReducer';
import actionTypes from '../actions/actionTypes';

const invoicesState = [];

describe('Given a invoicesReducer', () => {
  describe('When is invoked with a GET_ALL_INVOICES action', () => {
    test('Then should return the current state of the invoices', () => {
      const getInvoices = {
        type: actionTypes.GET_ALL_INVOICES,
        invoices: invoicesState[0]
      };

      const result = invoicesReducer(undefined, getInvoices);
      expect(result).toEqual(invoicesState[0]);
    });
  });
});
