const { Router } = require('express');
const {
  createInvoice, getAll, updateInvoiceById, deleteInvoiceById
} = require('../controller/invoiceController/invoiceController');

const invoiceRouter = () => {
  const invoiceRoutes = Router();

  invoiceRoutes
    .route('/')
    .get(getAll)
    .post(createInvoice);

  invoiceRoutes
    .route('/:invoiceId')
    .put(updateInvoiceById)
    .delete(deleteInvoiceById);

  return invoiceRoutes;
};

module.exports = invoiceRouter();
