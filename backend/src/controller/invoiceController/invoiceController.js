const Invoice = require('../../models/invoiceModel');
const handleError = require('../../utils/handle.errors');

const invoiceController = () => {
  const getAll = async (req, res) => {
    try {
      const invoices = await Invoice.find(req.query);
      res.json(invoices);
    } catch (error) {
      handleError.call(res, error);
    }
  };

  const getOne = async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.invoiceId);
      res.json(invoice);
    } catch (error) {
      handleError.call(res, error);
    }
  };

  const createInvoice = async (req, res) => {
    try {
      const invoice = await Invoice.create(req.body);
      res.json(invoice);
    } catch (error) {
      handleError.call(res, error);
    }
  };

  const updateInvoiceById = async (req, res) => {
    try {
      const invoice = await Invoice.findByIdAndUpdate(
        req.params.invoiceId,
        req.body,
        { new: true }
      );
      res.json(invoice);
    } catch (error) {
      handleError.call(res, error);
    }
  };

  const deleteInvoiceById = async (req, res) => {
    try {
      const invoice = await Invoice.findByIdAndDelete(
        req.params.invoiceId
      );
      res.status(204);
      res.json(invoice);
    } catch (error) {
      handleError.call(res, error);
    }
  };

  return {
    getAll,
    getOne,
    createInvoice,
    updateInvoiceById,
    deleteInvoiceById
  };
};

module.exports = invoiceController();
