// import express
const express = require('express');

// import path
const path = require('path');

// instantiate express app
const app = express();

// assign port for server
const port = process.env.PORT || 3000;

// parse incoming requests with JSON payloads
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../dist/')));

// app.use('/job', express.static(path.resolve(__dirname, '../dist/')));

// @ts-ignore
app.get('/', (req, res) => {
  res.sendStatus(200);
});

// @ts-ignore
app.get('/job', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// set express app to listen for requests on port declared above
app.listen(port, () => console.log(`App is running on ${port}...`));

module.exports = app;
