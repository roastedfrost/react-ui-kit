import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

if (module.hot) {
  module.hot.accept();
}

const mountPoint = window.document.getElementById('root');
ReactDOM.render(<App />, mountPoint);
