const express = require("express");
const postRouter = require("./routers/posts"); // Importa il router
const app = express();
const port = 3000;

const { notFoundHandler, errorHandler } = require("./middlewares");

// Configura una cartella per i file statici (ad esempio, immagini)
app.use(express.static("public"));

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

// Middleware per gestire le rotte non registrate
app.use(notFoundHandler);

// Middleware per la gestione degli errori
app.use(errorHandler);