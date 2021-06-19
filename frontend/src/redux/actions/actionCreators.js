import axios from 'axios';
import actionTypes from './actionTypes';

const invoicesUrl = process.env.REACT_APP_API_CLIENT_URL;

export function getInvoices() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(invoicesUrl);
      dispatch({
        type: actionTypes.GET_ALL_INVOICES,
        invoices: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ALL_INVOICES_ERROR
      });
    }
  };
}

export function getOneInvoice(invoice) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${invoicesUrl}${invoice._id}`);
      dispatch({
        type: actionTypes.GET_ONE_INVOICES,
        invoices: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ONE_INVOICES_ERROR
      });
    }
  };
}

export function addInvoice(invoice) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(invoicesUrl, invoice);
      dispatch({
        type: actionTypes.CREATE_INVOICE,
        invoice: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_INVOICE_ERROR
      });
    }
  };
}

export function updateInvoice(invoice) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${invoicesUrl}${invoice._id}`, invoice);
      dispatch({
        type: actionTypes.UPDATE_INVOICE,
        invoice: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_INVOICE_ERROR
      });
    }
  };
}

export function markAsPaid(invoice) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${invoicesUrl}${invoice._id}`, invoice);
      dispatch({
        type: actionTypes.TOGGLE_STATE,
        invoice: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TOGGLE_STATE_ERROR
      });
    }
  };
}

export function deleteInvoice(invoiceId) {
  return async (dispatch) => {
    try {
      await axios.delete(`${invoicesUrl}${invoiceId}`);
      dispatch({
        type: actionTypes.DELETE_INVOICE,
        invoiceId
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_INVOICE_ERROR
      });
    }
  };
}
