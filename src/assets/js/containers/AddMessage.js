import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

let AddMessage = ({dispatch}) => {
  let userInput,
      textInput
  return (
    <div>
      user: <input ref={(node) => {
        userInput = node
      }}/>
      text: <input ref={(node) => {
        textInput = node
      }}/>
      <button onClick={() => {
        dispatch(addMessage(userInput.value, textInput.value))
        userInput.value = '';
        textInput.value = '';
      }}>
        add message
      </button>
    </div>
  )
};
AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddMessage = connect()(AddMessage)

export default AddMessage;
