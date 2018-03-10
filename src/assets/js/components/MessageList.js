import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import '../../scss/messageList.scss';

const MessageList = ({messages,currentUser,onDeleteButton}) => {

  const renderMessages = messages.map((message) => {
    const userClassName = message.user == currentUser ? 'item current-user' : 'item';
    return (
      <li
        className={userClassName}
        key={message.id}>
        <Message
          {...message}
          onClick={onDeleteButton}
        />
      </li>
    )
  });

  return (
    <ul className="messages">
      {renderMessages}
    </ul>
  )
}
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired
  })),
  currentUser: PropTypes.string.isRequired,
  onDeleteButton: PropTypes.func.isRequired
}
export default MessageList;
