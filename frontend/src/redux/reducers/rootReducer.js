import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  invoice: invoiceReducer
});

export default rootReducer;
