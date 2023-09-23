import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import styled from "styled-components";
import { Navbar} from './Components/Navbar';



function App() {
  // const APIKey = "238ec5f91bd1642e2c788b75a7511edd";

  return (
    <ApolloProvider>
      <><Navbar />
      <div className="App">
        <div className="container">
        <h1 className='d-flex justify-content-center mt-2 mb-2'>Music Playlist!</h1>
        <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search"></input>
        </div>
        
        </div>
      </div></>
    </ApolloProvider>
  );
}

export default App;
