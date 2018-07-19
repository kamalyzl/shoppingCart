import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import store from './redux/store'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(store)}>
        <App />
    </Provider >,
    document.getElementById('root'));
registerServiceWorker();
