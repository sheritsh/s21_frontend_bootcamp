const express = require("express");
const app = express();
const serverRoutes = require("./routes/routes.js");
const PORT = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/views/styles", express.static(path.join(__dirname, "views/styles")));

const scriptsPath = path.join(__dirname, "views/scripts");
["scriptLogin.js", "scriptMyInfo.js", "scriptRegister.js"].forEach((script) => {
  app.get(`/views/scripts/${script}`, (req, res) => {
    res.sendFile(path.join(scriptsPath, script));
  });
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(serverRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
