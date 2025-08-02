const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
    required: true,
  },
  donations: {
    type: Number,
    required: true,
  },
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

module.exports = Leaderboard;
