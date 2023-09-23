const { Schema } = require('mongoose');

const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    }
  }
)

module.exports = songSchema;