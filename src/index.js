import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';
import App  from './app'
import './index.css'



ReactDOM.render(<App />,  document.getElementById('root'));
registerServiceWorker();
