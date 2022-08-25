import React from 'react';
import { Link, Outlet} from "react-router-dom";
import Userfront from "@userfront/react";
import "./Header.css"
import logo from "./Logo_Elephant-Fond_Fonce.png"

function Header() {
  if (Userfront.user["email"]==="giratina@pokemon.com") {
    return(
      <div className="top">
        <div className="topLeft">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="topCenter">
          <ul className="topList">
            <Link to="/home">Créer un compte </Link>
            <Link to="/login">Login </Link>
            <Link to="/passwordreset">Reset </Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboardAdmin">Admin</Link>
            <Outlet />
          </ul>
        </div>
        <div className="topRight">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }else{
    return(
      <div className="top">
        <div className="topLeft">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="topCenter">
          <ul className="topList">
            <Link to="/">Accueil </Link>
            <Link to="/passwordreset">Reset </Link>
            <Outlet />
          </ul>
        </div>
        <div className="topRight">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default Header 