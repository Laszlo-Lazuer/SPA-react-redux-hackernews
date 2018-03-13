import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
];

ReactDOM.render(
  <App stories={stories} />,
  document.getElementById('root'));

if (module.hot) {

module.hot.accept()
}
