import axios from 'axios';
import actionTypes from './actionTypes';
import {
  getInvoices
} from './actionCreators';

jest.mock('axios');

describe('Given a getInvoices action creator', () => {
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
        axios.mockRejectedValue();

        const dispatch = jest.fn();
        await getInvoices()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.GET_ALL_INVOICES_ERROR
        });
      });
    });
  });
});
