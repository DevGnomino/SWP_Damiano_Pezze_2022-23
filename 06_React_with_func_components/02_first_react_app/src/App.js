import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hallo!
        <Button name="Martin" age="18" />
        <Button name="Damio" age="17" />
        <Button name="Sulian" />
      </header>
    </div>
  );
}

export default App;
