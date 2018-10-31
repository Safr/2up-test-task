import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import styled from 'styled-components';
import {
  mainColor, secondaryColor, mSize, sSize,
} from '../theme/variables';
import { fetchUsers } from '../actions/users';
import Loader from './Loader';

const List = styled.ul`
  margin: 0 auto;
  padding: ${mSize};
  color: ${mainColor};

  li {
    margin-bottom: ${sSize};
    border: 1px solid ${mainColor};
    padding: ${sSize};
    background-color: ${secondaryColor};
  }
`;

export const UsersList = ({ users }) => {
  return (
    <List>
      {
        users.length > 0 ? users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))
          : <Loader />
      }
    </List>
  );
};

export const enhancedUserList = lifecycle({
  componentDidMount() {
    const { onFetchUsers, users } = this.props;
    if (users.length === 0) onFetchUsers();
  },
})(UsersList);

enhancedUserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onFetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  onFetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(enhancedUserList);
