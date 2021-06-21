import actionTypes from '../actions/actionTypes';
import invoiceReducer from './invoiceReducer';

const invoiceState = {};

describe('Given a function invoiceReducer', () => {
  describe('When is invoked with a CREATE_INVOICE action', () => {
    test('Then should return the current state of the invoices', () => {
      const action = {
        type: actionTypes.CREATE_INVOICE,
        invoices: {}
      };

      const result = invoiceReducer(invoiceState, action);
      expect(result).toEqual(action.invoices);
    });
  });

  describe('When is invoked with a GET_ONE_INVOICE action', () => {
    describe('And the ids match', () => {
      test('Then should return the invoice modified', () => {
        const updateInvoice = {
          type: actionTypes.GET_ONE_INVOICE,
          invoice: {}
        };

        const result = invoiceReducer(invoiceState, updateInvoice);

        expect(result).toEqual(updateInvoice.invoice);
      });
    });
  });

  describe('When is invoked with a UPDATE_INVOICE action', () => {
    describe('And the ids match', () => {
      test('Then should return the invoice modified', () => {
        const updateInvoice = {
          type: actionTypes.UPDATE_INVOICE,
          invoice: { }
        };

        const result = invoiceReducer(invoiceState, updateInvoice);

        expect(result).toEqual(updateInvoice.invoice);
      });
    });
  });

  describe('When is invoked with a UPDATE_INVOICE action', () => {
    describe('And the ids match', () => {
      test('Then should return the invoice modified', () => {
        const toggleState = {
          type: actionTypes.TOGGLE_STATE,
          invoice: { }
        };
        const result = invoiceReducer(invoiceState, toggleState);

        expect(result).toEqual(toggleState.invoice);
      });
    });
  });

  describe('When is invoked with a DELETE_TASK action', () => {
    test('Then should return an updated invoices list', () => {
      const deleteInvoices = {
        type: actionTypes.DELETE_INVOICE,
        invoice: {}
      };

      const result = invoiceReducer(invoiceState, deleteInvoices);

      expect(result).toEqual(undefined);
    });
  });

  describe('When is invoked', () => {
    test('Then should return the default state', () => {
      const result = invoiceReducer(invoiceState, {});

      expect(result).toEqual(invoiceState);
    });
  });
});
