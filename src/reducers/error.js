import { ADD_USERS_FAILURE } from '../actionTypes';

const initialState = '';

export default function users(state = initialState, action) {
  switch (action.type) {
  case ADD_USERS_FAILURE:
    return action.error;
  default:
    return state;
  }
}
