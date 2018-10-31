import React from 'react';
import { shallow } from 'enzyme';
import { enhancedUserList as UsersList } from '../../components/UsersList';

describe('UsersList Component', () => {
  const user = { id: 1, name: 'name' };
  const onFetchUsers = jest.fn();
  const wrapper = shallow(<UsersList users={[user]} onFetchUsers={onFetchUsers} />);
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should not call onFetchUsers if users', () => {
    wrapper.instance().componentDidMount();
    expect(onFetchUsers).toHaveBeenCalledTimes(0);
  });
  test('should call onFetchUsers if no users', () => {
    const wrapper = shallow(<UsersList users={[]} onFetchUsers={onFetchUsers} />);
    wrapper.instance().componentDidMount();
    expect(onFetchUsers).toHaveBeenCalled();
  });
});
