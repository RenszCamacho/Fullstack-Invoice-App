const {
  getAll,
  createUser,
  updateUserById,
  deleteUserById
} = require('./userController');
const User = require('../../models/userModel');

jest.mock('../../models/userModel');

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

        test('Then call User.find once', () => {
          expect(User.find).toHaveBeenCalled();
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

          User.find.mockRejectedValueOnce('find error');

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

          await createUser(req, res);
        });

        test('Then call User.create once', () => {
          expect(User.create).toHaveBeenCalled();
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

          User.create.mockRejectedValueOnce('create error');

          await createUser(req, res);
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

  describe('Given a function updateUserById', () => {
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

          await updateUserById(req, res);
        });

        test('Then call User.findByIdAndUpdate once', () => {
          expect(User.findByIdAndUpdate).toHaveBeenCalled();
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

          User.findByIdAndUpdate.mockRejectedValueOnce('findByIdAndUpdate error');

          await updateUserById(req, res);
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

  describe('Given a function deleteUserById', () => {
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

          await deleteUserById(req, res);
        });

        test('Then call User.findByIdAndDelete once', () => {
          expect(User.findByIdAndDelete).toHaveBeenCalled();
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

          User.findByIdAndDelete.mockRejectedValueOnce('findByIdAndDelete error');

          await deleteUserById(req, res);
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
