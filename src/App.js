import logo from './assets/logo.png';
import './App.css';
import Menu from './components/Menu.js';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
      <div>
        <figure>
          <img className="banner" src={logo} alt="Logo"></img>
        </figure>
      </div>
      <div>
    < Menu />
      </div>
      </header>
    </div>
  );
}
export default App;
