const { Sequelize } = require("sequelize");
const { Game, User } = require("../models");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});

exports.addNewGame = async (req, res) => {
  const { user_id, isWin } = req.body;
  try {
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newGame = await Game.create({
      user_id,
      isWin,
    });
    let gamesPlayed = user.games_played || [];
    gamesPlayed.push(newGame.id);
    await user.update({
      games_played: sequelize.literal(`ARRAY[${gamesPlayed}]::INTEGER[]`),
      counter_games_win: isWin ? (user.counter_games_win || 0) + 1 : user.counter_games_win,
    });
    res.json(newGame);
  } catch (error) {
    console.error("Error creating game:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
