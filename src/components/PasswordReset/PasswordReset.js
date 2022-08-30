import React from "react";
import Userfront from "@userfront/react";
import logo from "../Header/Logo_Elephant-Fond_Fonce.png"
import "./PasswordReset.css"

Userfront.init("6nz4zp8n");

const PasswordResetForm = Userfront.build({
  toolId: "kbklmr"
});

export default function PasswordReset() {
  return (
    <div>
      <div className="Header-passwordreset">
        <div className="Header-wrapper">
          <div className="Header-left">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
        </div>
      </div> 
      <div className="PasswordResetForm"> 
        <PasswordResetForm />
      </div>
    </div>
  );
}