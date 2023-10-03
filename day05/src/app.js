const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const handlebarsHelpers = require('./public/js/hbs-helpers');
const requireAuth = require('./middleware/authMiddleware');
const serverRoutes = require('./routes/routes.js');
const db = require('./models/index.js');

const app = express();
const PORT = process.env.PORT ?? 3000;
const paths = ['/', '/menu', '/orders'];

(async () => {
  await db.sequelize.sync();
})();

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

paths.forEach((sitePath) => {
  app.get(sitePath, requireAuth);
});

app.use(express.urlencoded({ extended: true }));
app.use(serverRoutes);
app.use(express.static(path.resolve(__dirname, 'public')));

// configure Handlebars
hbs.registerPartials(`${__dirname}/partials`);
hbs.registerHelper('ifEquals', handlebarsHelpers.ifEquals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}...`);
  await db.sequelize.authenticate();
  console.log('Database successfully connected.');
});
