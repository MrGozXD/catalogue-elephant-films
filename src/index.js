import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Userfront from "@userfront/react";
import App from './components/App/App.js';
import Home from './components/Home/Home.js';
import PasswordReset from './components/PasswordReset/PasswordReset.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Login from './components/Login/Login';
import Error from './components/Error/Error';



function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function RequireAuthAdmin({ children }) {
  let location = useLocation();
  // remplacer email par celui de John
  if ((!(Userfront.user["email"]==="giratina@pokemon.com"))||(!(Userfront.user["email"]==="j.sayada@wanadoo.fr"))) {
    // Redirect to the /login page
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<RequireAuthAdmin><Home /></RequireAuthAdmin>} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<RequireAuthAdmin><PasswordReset /></RequireAuthAdmin>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
