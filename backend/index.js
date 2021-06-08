const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

require('dotenv').config();

const userRouter = require('./src/routes/userRoutes');
const clientRouter = require('./src/routes/clientRoutes');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/user', userRouter);
app.use('/api/client', clientRouter);

app.listen(PORT, () => debug(
  `${chalk.blue('Server')} is ${chalk.magenta('is runnin')} on port ${chalk.cyanBright(`http://localhost:${PORT}`)}`
));
