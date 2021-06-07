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

  const createInvoice = async (req, res) => {
    try {
      const invoice = await Invoice.create(req.body);
      res.json(invoice);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getAll,
    createInvoice
  };
};

module.exports = invoiceController();
