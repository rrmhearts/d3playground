import './App.css';
import Rectangle from './Rectangle'
import RectHooks from './RectHooks'
import Scatter from './Scatter/Scatter';
import Draggable from './Dragging/Draggable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rectangle />
        <RectHooks />
        <Scatter />
      </header>
      <Draggable
        initialPos={{x: 100, y: 200}}
      >
        "Drag me"
      </Draggable>
    </div>
  );
}

export default App;
