import { combineReducers } from 'redux';
import currentUser from './currentUser';
import users from './users';
import messages from './messages';

const chatApp = combineReducers({
  users,
  currentUser,
  messages
});
export default chatApp;
