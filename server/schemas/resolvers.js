const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
// const mongoose = require("mongoose");
const { signToken } = require("../util/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          const userId = context.user._id;
          const user = await User.findById({ _id: userId });

          return user;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },  

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
      }
    },

    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  }  
};

module.exports = resolvers;
