const express = require("express");
const bodyParser = require("body-parser");
const postsRouter = require("./routers/posts");

const app = express();
const port = 3000;

// Middleware per gestire JSON nel body delle richieste
app.use(bodyParser.json());

// Rotta principale per i post
app.use("/posts", postsRouter);

// Rotta di default (opzionale)
app.get("/", (req, res) => {
  res.send("Benvenuto nel blog API!");
});

// Avvio del server
app.listen(port, () => {
  console.log("Server in ascolto");
});