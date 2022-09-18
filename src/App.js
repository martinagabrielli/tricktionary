import './App.css';
import TricksRollup from './components/TricksRollup';
import tricks from './tricks.js';

function App() {
  return (
    <div className="main container">
      <header className="header text-center">
        <h1>Tricktionary</h1>
      </header>
      <div className="tricks-rollup__row row">
        <TricksRollup tricks={tricks} />
      </div>
    </div>
  );
}

export default App;
