import "../Styles/login.css";
import React, { useState } from "react";
import SignInForm from "../Components/SignIn";
import SignUpForm from "../Components/SignUp";

export function Login() {
  const [type, setType] = useState("signIn");

  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="login">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h">Welcome Back!</h1>
              <p id="text">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost si"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h">Hello, Friend!</h1>
              <p id="text">Enter your personal details and start journey with us</p>
              <button
                className="ghost si"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
