const { model, Schema } = require('mongoose');

const invoiceSchema = Schema({
  from: {
    name: String,
    email: String,
    address: {
      street: String,
      city: String,
      postCode: String,
      country: String
    }
  },
  to: {
    name: String,
    email: String,
    address: {
      street: String,
      city: String,
      postCode: String,
      country: String
    }
  },
  invoiceDate: String,
  paymentTerms: String,
  projectDescription: String,
  status: Boolean,
  items: [{
    productName: String,
    quantity: Number,
    price: Number,
    total: Number
  }],
  total: Number
});

module.exports = model('Invoice', invoiceSchema);
