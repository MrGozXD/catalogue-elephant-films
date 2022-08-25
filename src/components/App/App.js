import logo from './Logo_Elephant-Noir.png'
import './App.css';
import { Link, Outlet } from "react-router-dom";
import Userfront from "@userfront/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenue sur le catalogue de </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <article>
        <div>
          <Link to="/home">Home </Link>
          <Link to="/login">Login </Link>
          <Link to="/passwordreset">Reset </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Outlet />
        </div>
      </article>
      <footer className="App-footer">
        <button onClick={Userfront.logout}>Logout</button>
        <p>Bas de page</p>
      </footer>
    </div>
  );
}

export default App;

