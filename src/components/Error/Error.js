import React from "react";
import { Link } from "react-router-dom";
import logo from "../Header/Logo_Elephant-Fond_Fonce.png"
import "./Error.css"

function Error() {
  return (
    <div>
      <div className="Header-error">
        <div className="Header-wrapper">
          <div className="Header-left">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
        </div>
      </div> 
      <div className="Error">
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </div>
  );
}

export default Error
