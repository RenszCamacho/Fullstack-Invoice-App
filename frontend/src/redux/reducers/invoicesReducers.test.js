import invoicesReducer from './invoicesReducer';
import actionTypes from '../actions/actionTypes';

let invoicesState = [];

describe('Given a invoicesReducer', () => {
  describe('When is invoked with a GET_ALL_INVOICES action', () => {
    test('Then should return the current state of the invoices', () => {
      const getInvoices = {
        type: actionTypes.GET_ALL_INVOICES,
        invoices: invoicesState[0]
      };

      const result = invoicesReducer(undefined, getInvoices);
      expect(result).toEqual([invoicesState[0]]);
    });
  });

  describe('When is invoked with a CREATE_INVOICE action', () => {
    test('Then should return a new invoice', () => {
      const addInvoice = {
        type: actionTypes.CREATE_INVOICE,
        invoice: { name: 'John Lennon' }
      };

      const result = invoicesReducer([...invoicesState], addInvoice);

      expect(result).toEqual([{ name: 'John Lennon' }]);
    });
  });

  describe('When is invoked with a UPDATE_INVOICE action', () => {
    describe('And the ids match', () => {
      test('Then should return the invoice modified', () => {
        invoicesState = [{
          _id: 1,
          name: 'Cosme Fulanito'
        }];

        const updateInvoice = {
          type: actionTypes.UPDATE_INVOICE,
          invoice: { _id: 1, name: 'Mr Incognito' }
        };

        const result = invoicesReducer([...invoicesState], updateInvoice);

        expect(result).toEqual([
          {
            0: { _id: 1, name: 'Cosme Fulanito' },
            _id: 1,
            name: 'Mr Incognito'
          }
        ]);
      });
    });

    describe('And the ids does not match', () => {
      test('Then should return the invoiceState', () => {
        invoicesState = [{
          _id: 1,
          name: 'Cosme Fulanito'
        }];

        const updateInvoice = {
          type: actionTypes.UPDATE_INVOICE,
          invoice: { _id: 2, name: 'Mr Incognito' }
        };

        const result = invoicesReducer([...invoicesState], updateInvoice);

        expect(result).toEqual([
          [
            { _id: 1, name: 'Cosme Fulanito' }
          ]
        ]);
      });
    });
  });

  describe('When is invoked with a DELETE_TASK action', () => {
    test('Then should return an updated invoices list', () => {
      invoicesState = [{
        _id: 1,
        name: 'Cosme Fulanito'
      }];

      const deleteInvoices = {
        type: actionTypes.DELETE_INVOICE,
        taskId: { _id: 1 }
      };

      const result = invoicesReducer([...invoicesState], deleteInvoices);

      expect(result).toEqual([]);
    });
  });

  describe('When is invoked', () => {
    test('Then should return the default state', () => {
      const result = invoicesReducer(invoicesState, {});

      expect(result).toEqual(invoicesState);
    });
  });
});
