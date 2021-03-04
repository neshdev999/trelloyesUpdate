import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Store from './Store';

ReactDOM.render(<App storeProp={Store}/>, document.getElementById('root'));

