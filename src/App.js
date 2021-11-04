// import React, { useState } from 'react';


import './App.css';
import bridge from '@vkontakte/vk-bridge';

function send() {
    bridge.send("VKWebAppOpenCodeReader");
    console.log('hello world!');
}


function App(props) {
  return (
    <div className="App">
      <h1>QR Code scanner</h1>
      {/*<p>Вы кликнули {count} раз(а)</p>*/}
      <button onClick={() => send()}>
          Отсканировать
      </button>
    </div>
  );
}

export default App;
