import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { switchUser } from '../actions';

const mapStateToProps = (state) => {
  return { users: state.users}
};

const mapDispatchToProps = {
  onSwitchButton: switchUser
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default VisibleUserList;
