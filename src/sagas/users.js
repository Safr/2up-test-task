import {
  call, put, fork, takeLatest, all,
} from 'redux-saga/effects';
import { addUsersSuccess, addUsersFailure } from '../actions/users';
import { FETCH_USERS } from '../actionTypes';

const endpoint = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  const res = await fetch(endpoint);
  const usersData = await res.json();
  const users = usersData.map(({ id, name }) => ({ id, name }));
  return users;
};

export function* fetchUsers() {
  try {
    const users = yield call(getUsers);
    if (users) {
      yield put(addUsersSuccess(users));
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    yield put(addUsersFailure(error.message));
  }
}


export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export default function* usersSaga() {
  yield all([
    fork(watchFetchUsers),
  ]);
}
