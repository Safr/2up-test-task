import { fork } from 'redux-saga/effects';
import root from '../../sagas';
import usersSaga from '../../sagas/users';

describe('root', () => {
  const watchAll = root();
  test('should run all the effects', () => {
    const effectUsers = watchAll.next().value;
    expect(effectUsers).toEqual(fork(usersSaga));
  });
});
