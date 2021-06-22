import actionTypes from '../actions/actionTypes';

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return action.user;
    case actionTypes.LOG_IN:
      return action.user;
    default:
      return user;
  }
}
