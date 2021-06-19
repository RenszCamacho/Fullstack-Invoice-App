import actionTypes from '../actions/actionTypes';

export default function invoiceReducer(invoiceState = {}, action) {
  const newData = action.invoice;

  switch (action.type) {
    case actionTypes.GET_ONE_INVOICE:
      return { ...invoiceState, ...newData };

    case actionTypes.CREATE_INVOICE:
      return { ...invoiceState, ...newData };

    case actionTypes.UPDATE_INVOICE:
      return { ...invoiceState, ...newData };

    case actionTypes.TOGGLE_STATE:
      return { ...invoiceState, ...newData };

    case actionTypes.DELETE_INVOICE:
      return action.invoiceId;

    default:
      return invoiceState;
  }
}
