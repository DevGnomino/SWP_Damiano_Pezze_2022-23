import './App.css';
import Button from './components/Button.js';
import Button2 from './components/Button2.js';
import Card from './components/Card';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hallo!
        <Button name="Martin" age="18" />
        <Button name="Damio" age="17" />
        <Button name="Sulian" />
        <Button2 val="Sendar" />
        <List listPoints={["Coffee","Tea","Beer"]}/>
        <Card imgUrl="https://www.w3schools.com/howto/img_avatar.png" firstname="John" lastname="Doe" jobDesc="Architect & Engineer"/>
      </header>
    </div>
  );
}
 
export default App;
