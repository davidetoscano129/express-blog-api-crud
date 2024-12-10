const express = require("express");
const postRouter = require("./routers/posts"); // Importa il router
const app = express();
const port = 3000;

// Middleware per il parsing del body in formato JSON
app.use(express.json());

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