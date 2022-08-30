import React from "react";
import Userfront from "@userfront/react";
import { Link, Outlet} from "react-router-dom";
import "./Login.css";
import logo from "../Header/Logo_Elephant-Fond_Fonce.png"

Userfront.init("6nz4zp8n");

const LoginForm = Userfront.build({
    toolId: "onlabo"
});

export default function Login() {
    return (
      <div>
        <div className="Header-login">
          <div className="Header-wrapper">
            <div className="Header-left">
              <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
              <Outlet />
            </div>
          </div>
        </div>
        <div className="LoginForm">
          <LoginForm />
        </div>
      </div>
    )
}

