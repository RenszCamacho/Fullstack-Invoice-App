const Invoice = require('../models/invoiceModel');

const invoiceController = () => {
  const getAll = async (req, res) => {
    try {
      const invoice = await Invoice.find(req.query);
      res.json(invoice);
    } catch (error) {
      res.status(500);
    }
  };

  return {
    getAll
  };
};

module.exports = invoiceController;
