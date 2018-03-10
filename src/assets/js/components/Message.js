import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';

const Message = ({user, id, text, created, onClick}) => {
  const createdDate = dateformat(new Date(created), 'yyyy/mm/dd hh:mm:ss');

  return (
    <div className="message">
      <div className="message-body">
        <div className="user-name">
          <p>{user}</p>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
      <div className="message-detail">
        <p>{createdDate}</p>
        <div>
          <button onClick={() => onClick(id)}>delete</button>
        </div>
      </div>
    </div>
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
