import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Theme from './theme'

import Layout from './Layout';
import Root from "./store";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Root>
        <MuiThemeProvider theme={Theme}>
            <CssBaseline>
                <Layout />
            </CssBaseline>
        </MuiThemeProvider>
    </Root>, document.getElementById('root'));
