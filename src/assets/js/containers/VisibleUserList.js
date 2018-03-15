import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { switchUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = {
  onSwitchSelect: switchUser
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default VisibleUserList;
