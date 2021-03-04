// @ts-ignore
const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const { query } = require('./models/dbModel.ts');

require('./server-auth.ts')(app);

// body parsing/url parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve build folder/statically serving client folder
app.use(express.static(path.resolve(__dirname, '../dist/')));

const postRouter = require('./routers/postRouter.ts');

// route
app.use('/post', postRouter);

// @ts-ignore
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// @ts-ignore
app.get('/job', (req, res) => {
  console.log('in /job/', req);
  console.log('in job', res.locals);
  res.status(200).send('/job');
});

// error handling
// @ts-ignore
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error',
    error: '',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

// set express app to listen for requests on port declared above
app.listen(port, () => console.log(`App is running on ${port}...`));

module.exports = app;
