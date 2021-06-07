const { model, Schema } = require('mongoose');

const invoiceSchema = Schema({
  clientName: String,
  clientEmail: String,
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String
  },
  invoiceDate: String,
  paymentTerms: String,
  projectDescription: String,
  listItem: {
    productName: String,
    quantity: Number,
    price: Number
  }
});

module.exports = model('Invoice', invoiceSchema);
