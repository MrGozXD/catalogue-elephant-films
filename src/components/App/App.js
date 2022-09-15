import logo from '../Header/Logo_Elephant-Fond_Fonce.png';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>Bienvenue sur le catalogue de </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-wrapper">
        <div className="App-links">
          <Link className="App-dashboard-link" to="/dashboard">Consulter</Link>
          <Outlet />
        </div>
      </div>
      <div className="App-footer">
        <p>Site réalisé par <span><a href="https://www.linkedin.com/in/yannis-peloutier-00331017a/">Yannis Peloutier</a></span></p>
      </div>
    </div>
  );
}

export default App;

