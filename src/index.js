import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './styles/index.css'

import {store} from "./features/store";

import App from "./components/App/App";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>


)