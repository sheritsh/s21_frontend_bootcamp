const { Sequelize } = require("sequelize");
const { User } = require("../models");

exports.bestPlayers = async (req, res) => {
  try {
    const bestPlayers = await User.findAll({
      attributes: ["username", "counter_games_win", "games_played"],
      where: {
        games_played: {
          [Sequelize.Op.and]: [
            { [Sequelize.Op.ne]: null },
            Sequelize.where(Sequelize.fn("array_length", Sequelize.col("games_played"), 1), ">", 10),
          ],
        },
      },
    });
    const updatedBestPlayers = bestPlayers.map((player) => {
      return {
        username: player.username,
        counter_game: player.games_played.length,
        counter_win: player.counter_games_win,
        counter_loss: player.games_played.length - player.counter_games_win,
        percentage_of_wins: parseInt((player.counter_games_win / player.games_played.length) * 100),
      };
    });
    updatedBestPlayers.sort((a, b) => b.percentage_of_wins - a.percentage_of_wins);
    res.render("bestPlayers.ejs", { updatedBestPlayers });
  } catch (error) {
    console.error("Error fetching best players:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
