import logo from './logo.svg';
import './App.css';
import Rectangle from './Rectangle'
import RectHooks from './RectHooks'
import Scatter from './Scatter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rectangle />
        <RectHooks />
        <Scatter />
      </header>
    </div>
  );
}

export default App;
