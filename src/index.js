import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import * as serviceWorker from './serviceWorker';

setGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
