const express = require("express");
const postsRouter = require("./routers/posts"); // Importa il router
const bodyParser = require("body-parser"); // Per il parsing del body

const app = express();
const port = 3000;

// Middleware per servire file statici 
app.use(express.static("public"));

// Middleware per analizzare il body delle richieste
app.use(bodyParser.json());

// Rotta principale per i post
app.use("/posts", postsRouter);

// Rotta di default (opzionale)
app.get("/", (req, res) => {
    res.send("Benvenuto nel blog API!");
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});