const { User } = require("../models");

exports.myStatsInfo = async (req, res) => {
  res.render("myInfo.ejs");
};

exports.myStats = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }
    const gamesPlayed = user.games_played ? user.games_played.length : 0;
    const gamesWin = user.counter_games_win || 0;
    const gamesLost = gamesPlayed - gamesWin;
    const percentageOfWins = gamesWin !== 0 ? parseInt((gamesWin / gamesPlayed) * 100) : 0;
    const username = user.username;
    const stats = {
      username,
      gamesPlayed,
      gamesWin,
      gamesLost,
      percentageOfWins,
    };
    res.json(stats);
  } catch (error) {
    console.error("Error fetching user stats:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
