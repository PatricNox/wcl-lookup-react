import logo from '../assets/logo.png';
import QueryForm from './QueryForm.js';
import '../assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WCL Lookup Tool</h1>
        <p>A simple tool to lookup a characters latest info.</p>
      </header>
      <QueryForm></QueryForm>
    </div>
  );
}

export default App;
