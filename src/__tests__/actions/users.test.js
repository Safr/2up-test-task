import { addUsersSuccess, addUsersFailure } from '../../actions/users';

describe('Users Actions', () => {
  const user = {
    id: 1,
    name: 'name',
  };
  test('should add users', () => {
    const action = addUsersSuccess([user]);
    expect(action).toMatchSnapshot();
  });
  test('should add error', () => {
    const action = addUsersFailure('error');
    expect(action).toMatchSnapshot();
  });
});
