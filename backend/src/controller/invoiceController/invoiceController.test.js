const {
  getAll, createInvoice, updateInvoiceById, deleteInvoiceById, getOne
} = require('./invoiceController');
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

        test('Then call res.status with a 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('find error');
        });
      });
    });
  });

  describe('Given a function getOne', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: 'mock' }
          };

          res = {
            json: jest.fn()
          };

          await getOne(req, res);
        });

        test('Then call Invoice.findById once', () => {
          expect(Invoice.findById).toHaveBeenCalled();
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: 'mock' }
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Invoice.findById.mockRejectedValueOnce('findById error');

          await getOne(req, res);
        });

        test('Then call res.status with a 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with find error', () => {
          expect(res.send).toHaveBeenCalledWith('findById error');
        });
      });
    });
  });

  describe('Given a function create', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            body: null
          };

          res = {
            json: jest.fn()
          };

          await createInvoice(req, res);
        });

        test('Then call Invoice.create once', () => {
          expect(Invoice.create).toHaveBeenCalled();
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            body: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Invoice.create.mockRejectedValueOnce('create error');

          await createInvoice(req, res);
        });

        test('Then call res.status with a 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with create error', () => {
          expect(res.send).toHaveBeenCalledWith('create error');
        });
      });
    });
  });

  describe('Given a function updateInvoiceById', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: null },
            body: null
          };

          res = {
            json: jest.fn()
          };

          await updateInvoiceById(req, res);
        });

        test('Then call Invoice.findByIdAndUpdate once', () => {
          expect(Invoice.findByIdAndUpdate).toHaveBeenCalled();
        });

        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: null },
            body: null
          };

          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          };

          Invoice.findByIdAndUpdate.mockRejectedValueOnce('findByIdAndUpdate error');

          await updateInvoiceById(req, res);
        });

        test('Then call res.status with a 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with findByIdAndUpdate error', () => {
          expect(res.send).toHaveBeenCalledWith('findByIdAndUpdate error');
        });
      });
    });
  });

  describe('Given a function deleteInvoiceById', () => {
    describe('When is invoked', () => {
      let req;
      let res;

      describe('And there is no error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: null }
          };

          res = {
            status: jest.fn(),
            send: jest.fn()
          };

          await deleteInvoiceById(req, res);
        });

        test('Then call Invoice.findByIdAndDelete once', () => {
          expect(Invoice.findByIdAndDelete).toHaveBeenCalled();
        });

        test('Then call res.status with 204', () => {
          expect(res.status).toHaveBeenCalledWith(204);
        });

        test('Then call res.send once', () => {
          expect(res.status).toHaveBeenCalled();
        });
      });

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: { invoiceId: null }
          };

          res = {
            status: jest.fn(),
            send: jest.fn()
          };

          Invoice.findByIdAndDelete.mockRejectedValueOnce('findByIdAndDelete error');

          await deleteInvoiceById(req, res);
        });

        test('Then call res.status with a 500 error', () => {
          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then call res.send with findByIdAndUpdate error', () => {
          expect(res.send).toHaveBeenCalledWith('findByIdAndDelete error');
        });
      });
    });
  });
});
