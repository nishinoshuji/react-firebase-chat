import React from 'react';
import AddMessage from '../containers/AddMessage';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleUserList from '../containers/VisibleUserList';

const App = () => (
  <div>
    <VisibleUserList />
    <AddMessage />
    <VisibleMessageList />
  </div>
)
export default App;
