import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './com/Global/scss/main.scss';
// import './com/Global/css/Global.scss';
import registerServiceWorker from './registerServiceWorker';

// App
import Routes from './routes';

render((
  <Router>
    <Routes />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
