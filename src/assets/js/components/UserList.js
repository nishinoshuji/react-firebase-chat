import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/userList.scss';

const UserList = ({users, onSwitchButton}) => {
  return (
    <div className="user-list">
      <p>UserChoice:</p>
      {users.map((user) =>
        <button
          key={user}
          onClick={() => onSwitchButton(user)}>
          {user}
        </button>
      )}
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSwitchButton: PropTypes.func
}

export default UserList;
