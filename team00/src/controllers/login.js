const { User } = require("../models");

exports.singIn = async (req, res) => {
  res.render("login.ejs");
};

exports.login = async (req, res) => {
  const { username, password } = req.query;
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      const isPasswordMatch = user.password === password;
      res.json({ success: isPasswordMatch, id: user.id });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
