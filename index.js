const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello Home");

const handleProfile = (req, res) => res.send("You are on my profile");

const middleware = (req, res, next) => {
  console.log('middleware between');
  next();
}

app.use(middleware);

app.get("/", handleHome); 

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
