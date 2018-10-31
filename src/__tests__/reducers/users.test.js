import { ADD_USERS_SUCCESS } from '../../actionTypes';
import usersReducer from '../../reducers/users';

const initialState = [];

describe('Users reducer', () => {
  const user = {
    id: 1,
    name: 'name',
  };
  test('should setup default state', () => {
    const state = usersReducer(undefined, { type: '@@INIT' });
    expect(state).toMatchSnapshot();
  });
  test('should add users', () => {
    const action = { type: ADD_USERS_SUCCESS, users: [user] };
    const state = usersReducer(initialState, action);
    expect(state).toMatchSnapshot();
  });
});
