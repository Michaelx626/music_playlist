import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/scrollToTop";

import { Home } from "./Pages/home.js";
// import { useParams } from "react-router";
import injectContext from "./store/appContext";

import { Navbar } from "./Components/Navbar";
import { Login } from "./Pages/login.js";
import { UserProfile } from "./Pages/userprofile.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
          <Route element = {<Home />} path = "/" />
            <Route element = {<Login />} path = "/login" />
            <Route element = {<UserProfile />} path = "/user" />
            <Route element = {<h1>Not found!</h1>} />
            
            
          </Routes>
        </ScrollToTop>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);