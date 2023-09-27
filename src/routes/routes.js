const { Router } = require("express");
const registerController = require("../controllers/register.js");
const loginController = require("../controllers/login.js");
const bestPlayerController = require("../controllers/bestPlayers.js");
const addNewGameController = require("../controllers/addNewGame.js");
const myStatsController = require("../controllers/myStats.js");

const router = Router();

// GET /register — клиент регистрируется.
router.get("/signUp", registerController.singUp);
router.post("/api/signUp", registerController.register);

// GET /login — вход в систему.
router.get("/signIn", loginController.singIn);
router.get("/api/signIn", loginController.login);

// // GET /bestPlayers — получить массив объектов игроков, у которых число игр больше 10.
router.get("/bestPlayers", bestPlayerController.bestPlayers);

// // POST / —  добавление игры.
router.post("/api/", addNewGameController.addNewGame);

// // get /myStats/:user_id — получение данных о пользователе.
router.get("/myStats", myStatsController.myStatsInfo);
router.get("/api/myStats/:user_id", myStatsController.myStats);

module.exports = router;
