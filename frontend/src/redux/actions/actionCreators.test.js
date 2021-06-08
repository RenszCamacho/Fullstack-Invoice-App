import axios from 'axios';
import actionTypes from './actionTypes';
import {
  addInvoice,
  getInvoices,
  updateInvoice,
  deleteInvoice
} from './actionCreators';

jest.mock('axios');

describe('Given a function getInvoices action creator', () => {
  describe('When is invoked', () => {
    describe('And it is called by the dispatcher an has no errors', () => {
      test('Then should call all the invoices', async () => {
        axios.get.mockResolvedValueOnce({
          data: [{}]
        });

        const dispatch = jest.fn();
        await getInvoices()(dispatch);

        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.GET_ALL_INVOICES,
          invoices: [{}]
        });
      });
    });

    describe('And it is called by the dispatcher an has errors', () => {
      test('Then should dispatch an error', async () => {
        axios.get.mockRejectedValue();

        const dispatch = jest.fn();
        await getInvoices()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.GET_ALL_INVOICES_ERROR
        });
      });
    });
  });
});

describe('Given a function addInvoice action creator', () => {
  describe('When is invoked', () => {
    describe('And it is called by the dispatcher an has no errors', () => {
      test('Then should add a new invoice', async () => {
        const invoice = {
          data: { clientName: 'John Lennon' }
        };

        axios.post.mockResolvedValueOnce(invoice);

        const dispatch = jest.fn();
        await addInvoice()(dispatch);

        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.CREATE_INVOICE,
          invoice: invoice.data
        });
      });
    });

    describe('And it is called by the dispatcher an has errors', () => {
      test('Then should dispatch an error', async () => {
        axios.post.mockRejectedValue();

        const dispatch = jest.fn();
        await addInvoice()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.CREATE_INVOICE_ERROR
        });
      });
    });
  });
});

describe('Given a function updateInvoice action creator', () => {
  describe('When is invoked', () => {
    describe('And it is called by the dispatcher an has no errors', () => {
      test('Then should update the invoice', async () => {
        const invoice = {
          data: {
            clientName: 'John Lennon',
            clientEmail: 'johnlennon@beatles.com'
          }
        };

        axios.put.mockResolvedValueOnce(invoice);

        const dispatch = jest.fn();
        await updateInvoice(invoice)(dispatch);

        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.UPDATE_INVOICE,
          invoice: invoice.data
        });
      });
    });

    describe('And it is called by the dispatcher an has errors', () => {
      test('Then should dispatch an error', async () => {
        axios.post.mockRejectedValue();

        const dispatch = jest.fn();
        await updateInvoice()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.UPDATE_INVOICE_ERROR
        });
      });
    });
  });
});

describe('Given a function deleteInvoice action creator', () => {
  describe('When is invoked', () => {
    describe('And it is called by the dispatcher an has no errors', () => {
      test('Then should delete the invoice', async () => {
        const invoice = {
          data: {
            clientName: 'John Lennon',
            clientEmail: 'johnlennon@beatles.com'
          }
        };

        axios.delete.mockResolvedValueOnce(invoice);

        const dispatch = jest.fn();
        await deleteInvoice(1)(dispatch);

        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.DELETE_INVOICE,
          invoiceId: 1
        });
      });
    });

    describe('And it is called by the dispatcher an has errors', () => {
      test('Then should dispatch an error', async () => {
        axios.delete.mockRejectedValueOnce();

        const dispatch = jest.fn();
        await deleteInvoice()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.DELETE_INVOICE_ERROR
        });
      });
    });
  });
});
