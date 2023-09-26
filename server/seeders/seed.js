const db = require("../config/connection");
const { User, Song } = require("../models");
const userSeeds = require("./userSeeds.json");
const songSeeds = require("./songSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Song.deleteMany({});

    await User.create(userSeeds);
    await Song.create(songSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
