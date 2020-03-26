import React from 'react';
import ReactDOM from 'react-dom';
import './reset.min.css';
import './index.css';
import './fontello-codes.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
