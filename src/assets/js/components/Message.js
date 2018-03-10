import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

const Message = ({user, id, text, created, onClick}) => {
  const createdDate = dateformat(new Date(created), 'yyyy/mm/dd hh:mm:ss');

  return (
    <li>
      <p>user:{user}</p>
      <p>id:{id}</p>
      <p>text:{text}</p>
      <p>created:{createdDate}</p>
      <button onClick={() => onClick(id)}>delete</button>
    </li>
  )
}
Message.propTypes = {
  user: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Message;
