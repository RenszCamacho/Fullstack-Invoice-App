import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer';
import invoiceReducer from './invoiceReducer';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  invoice: invoiceReducer,
  user: userReducer,
  accesstoken: tokenReducer
});

export default rootReducer;
