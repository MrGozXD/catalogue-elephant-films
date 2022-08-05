import logo from './Logo_Elephant-Noir.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenue sur le catalogue de </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section></section>
      <footer className="App-footer">
        <p>Bas de page</p>
      </footer>
    </div>
  );
}

export default App;
