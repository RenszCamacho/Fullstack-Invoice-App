const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
  userAddress: {
    city: String,
    postCode: String,
    country: String
  },
  client: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = model('User', userSchema);
