import actionTypes from '../actions/actionTypes';
import userReducer from './userReducer';

describe('Given userReducer', () => {
  describe('When action.type equals actionTypes.SIGN_UP ', () => {
    test('return action.trips', () => {
      const user = {};
      const action = {
        type: actionTypes.SIGN_UP,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(action.user);
    });
  });
  describe('When action.type does not equal any case', () => {
    test('return user', () => {
      const user = {};
      const action = {
        type: 'default case',
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(user);
    });
  });
  describe('When action.type equals actionTypes.LOG_IN ', () => {
    test('return action.user', () => {
      const action = {
        type: actionTypes.LOG_IN
      };
      const result = userReducer(undefined, action);
      expect(result).toEqual(action.user);
    });
  });
  describe('When action.type equals actionTypes.GET_USER_DATA ', () => {
    test('return action.user', () => {
      const action = {
        type: actionTypes.GET_USER_DATA
      };
      const result = userReducer(undefined, action);
      expect(result).toEqual(action.user);
    });
  });
});
