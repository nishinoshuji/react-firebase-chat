import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessageList = ({messages}) => (
  <ul>
    {messages.map((message) =>
      <Message
        key={message.id}
        {...message}
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
  }))
}
export default MessageList;
