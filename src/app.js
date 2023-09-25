const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const serverRoutes = require('./routes/routes.js');
const db = require('./models/index.js');

const app = express();
const PORT = process.env.PORT ?? 3000;

(async () => {
  await db.sequelize.sync();
})();

bcrypt.hash('qwerty', 10, (err, hash) => {
  if (err) {
    console.error('Ошибка при генерации хеша:', err);
    return;
  }

  console.log('Хеш:', hash);

  // Теперь можно сохранить хеш в базу данных или выполнять другие действия с ним
});

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    store: new FileStore(),
    secret: 'AKtoTakieFixikiBolshoyBolshoySecret',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(serverRoutes);
app.use(express.static(path.resolve(__dirname, 'public')));

// configure Handlebars
hbs.registerPartials(`${__dirname}/partials`);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}...`);
  await db.sequelize.authenticate();
  console.log('Database successfully connected.');
});
