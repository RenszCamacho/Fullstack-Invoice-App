const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const passport = require('passport');

require('dotenv').config();

require('./src/config/ddbb.config');
require('./src/passport/jwb.strategy');
require('./src/passport/local.strategy');

const userRouter = require('./src/routes/user.routes')();
const clientRouter = require('./src/routes/client.routes');
const authRoutes = require('./src/routes/auth.routes');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/client', clientRouter);

app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);

app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userRouter
);

app.listen(PORT, () => debug(
  `${chalk.blue('Server')} is ${chalk.magenta('is runnin')} on port ${chalk.cyanBright(`http://localhost:${PORT}`)}`
));
