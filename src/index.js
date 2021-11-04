import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import { store } from './redux/store';

import "@vkontakte/vkui/dist/vkui.css";
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {}).then(r => console.log("Bridge:" , r));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
