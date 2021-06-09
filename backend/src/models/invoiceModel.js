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
    },
    idNumber: String,
    idType: String
  },
  to: {
    name: String,
    email: String,
    address: {
      street: String,
      city: String,
      postCode: String,
      country: String
    },
    idNumber: String,
    idType: String
  },
  invoiceDate: String,
  paymentTerms: String,
  projectDescription: String,
  items: [{
    productName: String,
    quantity: Number,
    price: Number
  }]
});

module.exports = model('Invoice', invoiceSchema);
