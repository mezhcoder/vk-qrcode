import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "@vkontakte/vkui/dist/vkui.css";
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {}).then(r => console.log("Bridge:" , r));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
