import logo from './Logo_Elephant-Noir.png'
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from '../Home/Home.js';
import Login from '../Login/Login.js';
import PasswordReset from '../PasswordReset/PasswordReset';
import Dashboard from '../Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenue sur le catalogue de </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/reset">Reset</Link>
                </li>
                <li>
                  <Link to="/Dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/reset" element={<PasswordReset />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
          </div>
        </Router>
      </section>
      <footer className="App-footer">
        <p>Bas de page</p>
      </footer>
    </div>
  );
}

export default App;


