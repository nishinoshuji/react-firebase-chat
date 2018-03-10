import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import { deleteMessage } from '../actions';

const mapStateToProps = (state) => {
  return { messages: state.messages}
};

const mapDispatchToProps = {
  onDeleteButton: deleteMessage
}

const VisibleMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

export default VisibleMessageList;
