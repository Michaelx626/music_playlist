import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/scrollToTop";

import { Home } from "./Pages/home.js";
// import { useParams } from "react-router";
import injectContext from "./store/appContext";

import { Navbar } from "./Components/Navbar";
import { Login } from "./Pages/login.js";
import { UserProfile } from "./Pages/userprofile.js";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default injectContext(Layout);