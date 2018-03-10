import React from 'react';
import AddMessage from '../containers/AddMessage';
import VisibleMessageList from '../containers/VisibleMessageList';
import VisibleUserList from '../containers/VisibleUserList';
import '../../scss/app.scss';

const App = () => (
  <div className="app-wrap">
    <VisibleUserList />
    <AddMessage />
    <VisibleMessageList />
  </div>
)
export default App;
