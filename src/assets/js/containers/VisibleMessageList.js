import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import { deleteMessage } from '../actions';

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = {
  onDeleteButton: deleteMessage
}

const VisibleMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default VisibleMessageList;
