const express = require("express");
const postRouter = require("./routers/posts"); // Importa il router
const app = express();
const port = 3000;

// Middleware per servire file statici
app.use(express.static("public"));

// Middleware per leggere il corpo delle richieste in formato JSON
app.use(express.json()); // Necessario per gestire correttamente le richieste POST

// Rotta principale per i post
app.use("/posts", postRouter);

// Rotta di default (opzionale)
app.get("/", (req, res) => {
  res.send("Benvenuto nel blog API!");
});

// Avvio del server
app.listen(port, () => {
  console.log("Server in ascolto");
});