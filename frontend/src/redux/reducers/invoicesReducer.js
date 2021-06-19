/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function invoicesReducer(invoicesState = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL_INVOICES:
      return action.invoices;

    case actionTypes.GET_ONE_INVOICE:
      return action.invoice;

    case actionTypes.CREATE_INVOICE:
      return [
        ...invoicesState,
        action.invoice
      ];

    case actionTypes.UPDATE_INVOICE:
      return invoicesState.map(
        (invoice) => (invoice._id === action.invoice._id
          ? { ...invoicesState, ...action.invoice }
          : invoicesState)
      );

    case actionTypes.TOGGLE_STATE:
      return invoicesState.map(
        (invoice) => (invoice._id === action.invoice._id
          ? { ...invoicesState, ...action.invoice }
          : invoicesState)
      );

    case actionTypes.DELETE_INVOICE:
      return invoicesState.filter(
        (invoice) => invoice._id === action.invoiceId
      );

    default:
      return invoicesState;
  }
}

export default invoicesReducer;
