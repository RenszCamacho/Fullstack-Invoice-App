const { Router } = require('express');
const {
  createInvoice, getAll, updateInvoiceById, deleteInvoiceById, getOne
} = require('../controller/invoiceController/invoiceController');

const invoiceRouter = () => {
  const invoiceRoutes = Router();

  invoiceRoutes
    .route('/')
    .get(getAll)
    .post(createInvoice);

  invoiceRoutes
    .route('/:invoiceId')
    .get(getOne)
    .put(updateInvoiceById)
    .delete(deleteInvoiceById);

  return invoiceRoutes;
};

module.exports = invoiceRouter();
