import { all, fork } from 'redux-saga/effects';
import usersSaga from './users';

const rootSaga = function* root() {
  yield all([
    yield fork(usersSaga),
  ]);
};

export default rootSaga;
