const { User } = require("../models");

exports.singUp = async (req, res) => {
  res.render("register.ejs");
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "The username is already taken" });
    }
    await User.create({
      username,
      password,
      games_played: [],
      counter_games_win: 0,
    });
    res.json({ success: true });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
