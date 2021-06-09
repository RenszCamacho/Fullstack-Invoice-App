const { model, Schema } = require('mongoose');

const invoiceSchema = Schema({
  BillFrom: {
    address: {
      street: String,
      city: String,
      postCode: String,
      country: String
    }
  },
  BillTo: {
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
  }
});

module.exports = model('Invoice', invoiceSchema);
