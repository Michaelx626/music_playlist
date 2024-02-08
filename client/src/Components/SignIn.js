import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../util/mutation";
import Auth from "../util/auth";

function SignInForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const [errMessage, setErrMessage] = useState(null);
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = response.data.login?.token;

      if (token) {
        Auth.login(token);
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleFormSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button className="ghost" >Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
