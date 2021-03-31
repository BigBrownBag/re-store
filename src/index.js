import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import {StoreServiceProvider} from './components/context';
import StoreService from './services/store-services';

const storeService = new StoreService();

ReactDOM.render (
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={storeService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'));