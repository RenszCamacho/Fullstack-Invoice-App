const { getAll } = require('./invoiceController');
const Invoice = require('../../models/invoiceModel');

jest.mock('../../models/invoiceModel');

describe('invoiceController', () => {
  describe('Given a function getAll', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn()
          };

          await getAll(req, res);
        });

        test.only('Then call Invoice.find once', () => {
          expect(Invoice.find).toHaveBeenCalled();
        });
      });
    });
  });
});
