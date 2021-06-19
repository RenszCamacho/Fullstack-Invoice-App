import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';

const rootReducer = combineReducers({
  invoices: invoicesReducer
  // invoice: invoiceReducer
});

export default rootReducer;
