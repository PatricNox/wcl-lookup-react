import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WCL Lookup Tool</h1>
        <description>A simple tool to lookup a characters latest info.</description>
      </header>
    </div>
  );
}

export default App;
