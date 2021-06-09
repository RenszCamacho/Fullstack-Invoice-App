const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
  profiles: [{
    address: {
      street: String,
      city: String,
      postCode: String,
      country: String
    },
    idNumber: String,
    idType: String
  }]
});

module.exports = model('User', userSchema);
