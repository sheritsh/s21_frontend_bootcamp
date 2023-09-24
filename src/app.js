const express = require('express');
const path = require('path');
const hbs = require('hbs');
const serverRoutes = require('./routes/routes.js');
const db = require('./models/index.js');

const app = express();
const PORT = process.env.PORT ?? 3000;

(async () => {
  await db.sequelize.sync();
})();

app.use(express.json());

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
