import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {stores} from './redux/store';
import {Provider} from 'react-redux';
const rootNode = document.getElementById('root');
ReactDOM.render (
    <Provider store={stores}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    </Provider>,
    rootNode
);
