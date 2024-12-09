const express = require("express");
const postsRouter = require("./routers/posts"); // Importa il router
const app = express();
const port = 3000;

app.use(express.static("public"));

// Rotta principale per i post
app.use("/posts", postsRouter);

// Rotta di default (opzionale)
app.get("/", (req, res) => {
  res.send("Benvenuto nel blog");
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto`);
});