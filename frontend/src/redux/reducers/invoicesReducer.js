/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function invoicesReducer(invoicesState = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL_INVOICES:
      return action.invoices;

    default:
      return invoicesState;
  }
}

export default invoicesReducer;
