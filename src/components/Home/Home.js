import React from "react";
import { Link, Outlet} from "react-router-dom";
import Userfront from "@userfront/react";
import "./Home.css"
import logo from "../Header/Logo_Elephant-Fond_Fonce.png"

Userfront.init("6nz4zp8n"); //identifiant compte Userfront

const SignupForm = Userfront.build({
  toolId: "bkdmon",
});

export default function Home() {
  return (
    <div>
      <div className="Header-home">
        <div className="Header-wrapper">
          <div className="Header-left">
            <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="SignupForm">
        <SignupForm />
      </div>
    </div>
  );
}

