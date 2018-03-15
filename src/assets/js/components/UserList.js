import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/userList.scss';

const UserList = ({users, onSwitchSelect}) => {
  const list = users.map((user) => {
    return (
      <option
        key={user}
        value={user}>
        {user}
      </option>
    );
  });

  let selectValue;

  const onSelectChange = ((e)=>{
    selectValue = e.target.value;
    onSwitchSelect(selectValue);
  });

  return (
    <div className="user-list">
      <p>User</p>
      <select
        value={selectValue}
        onChange={onSelectChange}>
        {list}
      </select>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSwitchSelect: PropTypes.func
}

export default UserList;
