import express from 'express';
// const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
}

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
}

const handleHome = (req, res) => {
  res.send('Hello from Home');
}

const handleProfile = (req, res) => {
  res.send('You are on my profile!?');
}

app.use(betweenHome);

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);