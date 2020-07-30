import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(React.createElement(
    Router,
    null,
    React.createElement(App, null)
), document.getElementById('root'));