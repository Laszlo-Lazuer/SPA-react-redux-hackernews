import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './components/App';



ReactDOM.render(
  <App stories={store.getState()} onArchive={(objectID) => {console.log(objectID);}} />,
  document.getElementById('root'));

if (module.hot) {

module.hot.accept()
}
