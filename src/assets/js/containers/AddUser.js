import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import '../../scss/addUser.scss';

let AddUser = ({dispatch}) => {
  let textInput;

  return (
    <div className="add-user">
      <input ref={(node) => (
        textInput = node
      )}/>
      <button onClick={() => {
        dispatch(addUser(textInput.value))
        textInput.value ='';
      }}>
        AddUser
      </button>
    </div>
  )
}

AddUser.propTypes = {
  dispatch: PropTypes.func.isRequired
};
AddUser = connect()(AddUser);

export default AddUser;
