import './App.css';


function App(props) {
  return (
    <div className="App">
      <h1>QR Code scanner</h1>
        ${props.bridge.send("VKWebAppOpenCodeReader")};
    </div>
  );
}

export default App;
