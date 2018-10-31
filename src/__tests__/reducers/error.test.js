import { ADD_USERS_FAILURE } from '../../actionTypes';
import errorReducer from '../../reducers/error';

const initialState = '';

describe('Users reducer', () => {
  test('should setup default state', () => {
    const state = errorReducer(undefined, { type: '@@INIT' });
    expect(state).toMatchSnapshot();
  });
  test('should add error', () => {
    const action = { type: ADD_USERS_FAILURE, error: 'error' };
    const state = errorReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
});
