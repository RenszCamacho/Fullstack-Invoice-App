const Invoice = require('../../models/invoiceModel');

const invoiceController = () => {
  const getAll = async (req, res) => {
    try {
      const invoices = await Invoice.find(req.query);
      res.json(invoices);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getOne = async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.invoiceId);
      res.json(invoice);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createInvoice = async (req, res) => {
    try {
      const invoice = await Invoice.create(req.body);
      res.json(invoice);
    } catch (error) {
      res.status(500);
      res.send(error);
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
      res.status(500);
      res.send(error);
    }
  };

  const deleteInvoiceById = async (req, res) => {
    try {
      await Invoice.findByIdAndDelete(
        req.params.invoiceId
      );
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
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
