import React from 'react';
import AddUser from '../containers/AddUser';
import AddMessage from '../containers/AddMessage';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleUserList from '../containers/VisibleUserList';
import '../../scss/app.scss';

const App = () => (
  <div className="app-wrap">
    <div className="app-header">
      <AddUser />
      <div className="app-message-send">
        <VisibleUserList />
        <AddMessage />
      </div>
    </div>
    <div className="app-body">
      <VisibleMessageList />
    </div>
  </div>
)
export default App;
