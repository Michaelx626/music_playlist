const { Schema, model } = require('mongoose');

const songSchema = new Schema(
  {
    artist: {
      type: String,
      required: true,
    },
    song: {
      type: String,
      required: true,
    },
  }
);

const Song = model("Song", songSchema);

module.exports = Song;