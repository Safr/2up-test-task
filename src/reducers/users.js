import { ADD_USERS_SUCCESS } from '../actionTypes';

const initialState = [];

export default function users(state = initialState, action) {
  switch (action.type) {
  case ADD_USERS_SUCCESS:
    return [
      ...state,
      ...action.users,
    ];
  default:
    return state;
  }
}
