import React, { useState } from "react";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        // Set loginSuccess to true on successful login
        setLoginSuccess(true);

        sessionStorage.setItem("username", "kminchelle");
        alert("Login Successfully)");
      } else 
        alert("Login Failed");
      
    } catch (error) {

      alert("An error occurred during login");
    }
  };

  // If loginSuccess is true, render the Dashboard component directly
  if (loginSuccess) {
    return <Dashboard />;
  }

  return (
    <div className="log">

      <div className="login-form-container">

        <div className="img-container">
          <img src="\src\assets\images\logo.jpg" alt="Logo" className="logo" />
        </div>

        <LoginForm
          username={username}
          password={password}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleSubmit}
        /> 

      </div>

    </div>
  );
};

export default Login;