import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({users, onSwitchButton}) => {
  return (
    <div>
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
