import React from 'react';
import AddMessage from '../containers/AddMessage';
import VisibleMessageList from '../containers/VisibleMessageList';
import SwitchUsers from './SwitchUsers';

const App = () => (
  <div>
    <SwitchUsers />
    <AddMessage />
    <VisibleMessageList />
  </div>
)
export default App;
