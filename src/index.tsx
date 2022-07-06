/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PADarkTheme } from './psychedelicsAnonymousDarkTheme';
import ReactGA from 'react-ga';
import 'babel-polyfill';

const TRACKING_ID_UA = 'UA-106774838-2';
// const TRACKING_ID_G4 = "G-330DPH9VRV";
// const TRACKING_ID_G = "G-VD0NBTS9VE";

ReactGA.initialize(TRACKING_ID_UA);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    // <React.StrictMode>
    <ThemeProvider theme={createTheme({ ...BLUIThemes.blueDark, ...PADarkTheme })}>
        <BrowserRouter>
            <CssBaseline />
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
