import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
serviceWorker.unregister();
