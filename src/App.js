import './App.css';
import Rectangle from './Rectangle'
import RectHooks from './RectHooks'
import Scatter from './Scatter/Scatter';
import Draggable from './Dragging/Draggable';
import QuoteApp from './QuoteApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rectangle />
        <RectHooks />
        <Scatter />
        <QuoteApp />
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
