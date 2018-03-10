import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import reducers from './reducers';
//import { addMessage,switchUser } from './actions';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

//test
//store.dispatch(addMessage('testA', 'test'));
//store.dispatch(addMessage('testB', 'test2'));
//store.dispatch(switchUser('testB'));
console.log(store.getState());
