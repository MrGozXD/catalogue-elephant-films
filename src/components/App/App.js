import logo from '../Header/Logo_Elephant-Fond_Fonce.png'
import './App.css';
import { Link, Outlet } from "react-router-dom";
import Userfront from "@userfront/react";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>Bienvenue sur le catalogue de </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-wrapper">
        <div className="App-links">
          <Link to="/home">Home </Link>
          <Link to="/login">Login </Link>
          <Link to="/passwordreset">Reset </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Outlet />
        </div>
      </div>
      <div className="App-footer">
        <button className="buttonLogout" onClick={Userfront.logout}>Logout</button>
        <p>Bas de page</p>
      </div>
    </div>
  );
}

export default App;

