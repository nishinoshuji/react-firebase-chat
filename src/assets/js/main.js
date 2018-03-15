import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import reducers from './reducers';
//import { addUser } from './actions';
import 'reset-css/reset.css';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

//test
//store.dispatch(addMessage('A', 'test'));
//store.dispatch(addMessage('B', 'testaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssss2'));
//store.dispatch(addUser('f'));
console.log(store.getState());
