const express = require("express");
const cors = require("cors");
const postRouter = require("./routers/posts");
const { notFoundHandler, errorHandler } = require("./middleware");

const app = express();
const port = 3001;

// Middleware per il parsing del body in formato JSON
app.use(express.json());

// Middleware per abilitare CORS
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }));// Configura una cartella per i file statici (opzionale)
app.use(express.static("public"));

// Rotta principale per i post
app.use("/api/posts", postRouter);

// Rotta di benvenuto (opzionale)
app.get("/", (req, res) => {
    res.send("Benvenuto nell'API del blog!");
});

// Middleware per gestire le rotte non registrate
app.use(notFoundHandler);

// Middleware per la gestione degli errori
app.use(errorHandler);

// Avvio del serverconst port = 3001;
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});