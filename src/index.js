import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "@vkontakte/vkui/dist/vkui.css";
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {}).then(r => console.log("Bridge:" , r));

String.prototype.hash = function() {
    let self = this, range = Array(this.length);
    for (let i = 0; i < this.length; i++) {
        range[i] = i;
    }
    return Array.prototype.map.call(range, function(i) {
        return self.charCodeAt(i).toString(16);
    }).join('');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
