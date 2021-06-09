/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function invoicesReducer(invoicesState = [], action) {
  let result = [...invoicesState];
  switch (action.type) {
    case actionTypes.GET_ALL_INVOICES:
      result = action.invoicesState;
      break;

    case actionTypes.CREATE_INVOICE:
      result = [
        ...invoicesState,
        action.invoice
      ];
      break;

    case actionTypes.UPDATE_INVOICE:
      result = invoicesState.map(
        (invoice) => (invoice._id === action.invoice._id
          ? { ...invoicesState, ...action.invoice }
          : invoicesState)
      );
      break;

    case actionTypes.DELETE_INVOICE:
      result = invoicesState.filter(
        (invoice) => invoice._id === action.invoiceId
      );
      break;

    default:
      result = invoicesState;
      break;
  }
  return result;
}

export default invoicesReducer;
