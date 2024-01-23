import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import styled from "styled-components";
import Playlist from '../Components/Playlist.js';
import Songlist from '../Components/SongList.js';
import UserInfo from '../Components/UserInfo.js';



export const Home = () =>{
  // const APIKey = "238ec5f91bd1642e2c788b75a7511edd";
  const playlistData = ["Song 1", "Song 2", "Song 3"];
  const songlistData = ["Playlist 1", "Playlist 2", "Playlist 3"];
  const userInfoData = "User: John Doe";

  return (
    <>
      <div className="App">
        <div className="container">

          <h1 className="d-flex justify-content-center mt-2 mb-2">
            Music Playlist!
          </h1>

          <div className="d-flex justify-content-center">
            <input type="text" placeholder="Search"></input>
          </div>

          <div className="container d-flex justify-content-between">
            <Playlist playlistData={playlistData} />
            <Songlist songlistData={songlistData} />
            <UserInfo userInfoData={userInfoData} />
          </div>

        </div>
      </div>
    </>
  );
}

