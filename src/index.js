import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import them from './theme'
import * as serviceWorker from './serviceWorker';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {SWRConfig} from 'swr';
import {Wrapper} from "@googlemaps/react-wrapper";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Wrapper apiKey='AIzaSyCxltP_VQer4lPOjjx8hWmejWCtCGQRPe8'>

        <SWRConfig>
            <ThemeProvider theme={them}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </SWRConfig>
    </Wrapper>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
