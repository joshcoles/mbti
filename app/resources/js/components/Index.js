import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class Index extends Component {
  render() {
    return (
      <App/>
    )
  }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
