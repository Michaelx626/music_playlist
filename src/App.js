import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import styled from "styled-components";

function App() {
  // const APIKey = "238ec5f91bd1642e2c788b75a7511edd";

  return (
    <ApolloProvider>
      <h1>hi</h1>
    </ApolloProvider>
  );
}

export default App;
