import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

const Message = ({user, id, text, created}) => {
  const createdDate = dateformat(new Date(created), 'yyyy/mm/dd hh:mm:ss');

  return (
    <li>
      <p>user:{user}</p>
      <p>id:{id}</p>
      <p>text:{text}</p>
      <p>created:{createdDate}</p>
    </li>
  )
}
Message.propTypes = {
  user: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired
}
export default Message;
