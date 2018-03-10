import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

let AddMessage = ({currentUser,dispatch}) => {
  let textInput;

  return (
    <div>
      text: <input ref={(node) => {
        textInput = node
      }}/>
      <button onClick={() => {
        dispatch(addMessage(currentUser,textInput.value))
        textInput.value = '';
      }}>
        add message
      </button>
    </div>
  )
};

AddMessage.propTypes = {
  currentUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

AddMessage = connect((state) => {
  return { currentUser: state.currentUser}
})(AddMessage);

export default AddMessage;
