import logo from './logo.svg';
import './App.css';
import Rectangle from './Rectangle'
import RectHooks from './RectHooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rectangle />
        <RectHooks />
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
