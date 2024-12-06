const express = require('express'); // Importo express
const post = require('./data'); // Importo il router definito in post.js
const app = express(); // Creo un'istanza dell'app express
const port = 3000;
const postsRouter = require("./routers/posts");

app.use(express.static("public")); // Configura express per servire file statici (es. immagini) dalla cartella public

app.use("/posts", postsRouter);

// Rotta di default
app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

// Rotta "/bacheca"
app.get(`/bacheca`, (req, res) => {
    res.json({
        posts: post.data,
        length: post.data.length,
    });

});

// Avvia il server e logga che è in ascolto
app.listen(port, () => {
    console.log('Server in ascolto');
})