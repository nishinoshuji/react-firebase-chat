import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({messages,currentUser,onDeleteButton}) => {

  const renderMessages = messages.map((message) => {
    const userClassName = message.user == currentUser ? 'current-user' : '';
    return (
      <li
        className={'list',userClassName}
        key={message.id}>
        <Message
          {...message}
          onClick={onDeleteButton}
        />
      </li>
    )
  });

  return (
    <ul>
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
