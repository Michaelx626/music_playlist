import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../util/mutation";
import Auth from "../util/auth";

function SignUpForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = evt => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser({
        variables: {
          username: formState.name,
          email: formState.email,
          password: formState.password,
        },
      });

      const token = response.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleFormSubmit}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="ghost">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
