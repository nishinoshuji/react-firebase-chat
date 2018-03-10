import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({messages,onDeleteButton}) => (
  <ul>
    {messages.map((message) =>
      <Message
        key={message.id}
        {...message}
        onClick={onDeleteButton}
      />
    )}
  </ul>
)
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired
  })),
  onDeleteButton: PropTypes.func.isRequired
}
export default MessageList;
