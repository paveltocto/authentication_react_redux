import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/AppContainer';
import {store} from "./helpers";

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
