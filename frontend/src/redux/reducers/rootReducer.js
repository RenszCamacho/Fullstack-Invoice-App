import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import invoiceReducer from './invoiceReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  invoice: invoiceReducer,
  user: userReducer
});

export default rootReducer;
