import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import storeConfig from './src/store/storeConfig'

const store = storeConfig();
const Redux = () => (
    <Provider store={store} >
        <App />
    </Provider >
)
//console.disableYellowBox = true;
LogBox.ignoreAllLogs()

AppRegistry.registerComponent(appName, () => Redux);
