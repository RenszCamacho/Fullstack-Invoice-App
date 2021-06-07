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

        test('Then call Invoice.find once', () => {
          expect(Invoice.find).toHaveBeenCalled();
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Invoice.find.mockRejectedValueOnce('find error');

          await getAll(req, res);
        });

        test('Then call res.status with an 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });
});
