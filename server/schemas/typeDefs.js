const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
    favorites: [Favorite]
  }

  type Song {
    _id: ID
    artist: String
    song: String
  }

  # type Favorite {
  #   _id: ID
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    getAllFavorites: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(name: String!, artist: String!): User
    deleteFavorite(songID: ID!): User
  }

`;

module.exports = typeDefs;