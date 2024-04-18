// import logo from './logo.svg';
import './App.css';
import _hexTile from './components/_hex-tile';

function App() {
  return (
    <div className="App">
      <header>
        <p>Some temp content in here</p>
      </header>
      <div className="grid-container">
        <_hexTile></_hexTile>
        <_hexTile></_hexTile>
        <_hexTile></_hexTile>
        <_hexTile></_hexTile>
        <_hexTile></_hexTile>
      </div>
    </div>
  );
}

export default App;
