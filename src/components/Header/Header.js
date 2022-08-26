import React from 'react';
import { Link, Outlet} from "react-router-dom";
import Userfront from "@userfront/react";
import "./Header.css"
import logo from "./Logo_Elephant-Fond_Fonce.png"

function Header() {
  if (Userfront.user["email"]==="giratina@pokemon.com") {
    return(
      <div className="Header">
        <div className="Header-wrapper">
          <div className="Header-left">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
          <div className="Header-center">
            <ul className="Header-list">
              <div className="Header-admin">
                <Link to="/home">Créer un compte </Link>
                <Outlet />
              </div>
              <div className="Header-admin">
                <Link to="/passwordreset">Mot de passe oublié </Link>
                <Outlet />
              </div>
            </ul>
          </div>
          <div className="Header-right">
            <div className="Header-right-logout">
              <button onClick={Userfront.logout}>Se déconnecter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div className="Header">
        <div className="Header-wrapper">
          <div className="Header-left">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
          <div className="Header-right">
            <div className="Header-right-logout">
              <button onClick={Userfront.logout}>Se déconnecter</button>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Header 