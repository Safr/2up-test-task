import {
  FETCH_USERS, ADD_USERS_SUCCESS, ADD_USERS_FAILURE,
} from '../actionTypes';

export const addUsersSuccess = users => ({
  type: ADD_USERS_SUCCESS,
  users,
});

export const addUsersFailure = error => ({
  type: ADD_USERS_FAILURE,
  error,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
