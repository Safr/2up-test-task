import {
  all, call, fork, put, takeLatest,
} from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import usersRoot from '../../sagas/users';
import {
  FETCH_USERS,
} from '../../actionTypes';
import { addUsersSuccess, addUsersFailure } from '../../actions/users';
import {
  watchFetchUsers, fetchUsers, getUsers,
} from '../../sagas/users';

describe('users root', () => {
  const watchAll = usersRoot();
  test('should run all the generators', () => {
    const effect = watchAll.next().value;
    expect(effect).toEqual(all([
      fork(watchFetchUsers),
    ]));
  });
});

describe('users saga watchers', () => {
  describe('watchFetchUsers', () => {
    test('waits for the FETCH_USERS action', () => {
      const generator = cloneableGenerator(watchFetchUsers)();
      const expectTake = generator.next().value;
      expect(expectTake).toEqual(takeLatest(FETCH_USERS, fetchUsers));
    });
  });
});

describe('users saga workers', () => {
  describe('fetchUsers', () => {
    const user = { id: 1, name: 'name' };
    const gen = fetchUsers();
    test('should call fetchUsers', () => {
      expect(gen.next().value).toEqual(call(getUsers));
    });
    test('should dispatch addUsersSuccess action', () => {
      expect(gen.next([user]).value).toEqual(put(addUsersSuccess([user])));
    });
    test('should dispatch addUsersFailure action', () => {
      const error = gen.throw(new Error('Something went wrong!')).value;
      expect(error).toEqual(put(addUsersFailure('Something went wrong!')));
    });
    test('should be done', () => {
      expect(gen.next().done).toEqual(true);
    });
  });
});
