import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/userList.scss';

const UserList = ({users, currentUser, onSwitchButton}) => {
  const list = users.map((user) => {
    const userClass = user === currentUser ? 'current-user' : '' ;
    return (
      <button
        className={userClass}
        key={user}
        onClick={() => onSwitchButton(user)}>
        {user}
      </button>
    );
  });

  return (
    <div className="user-list">
      <p>UserChoice:</p>
      {list}
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentUser: PropTypes.string.isRequired,
  onSwitchButton: PropTypes.func
}

export default UserList;
