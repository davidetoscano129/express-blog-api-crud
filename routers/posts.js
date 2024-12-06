const express = require("express");
const router = express.Router();
const posts = require('../data');

// (Index) Restituisce l’intera lista di post insieme al conteggio totale. È utile per ottenere una panoramica generale
router.get('/',(req,res)=>{
    res.json({
        data: posts,
        count:posts.length
    });
}); 

// (Show) Cerca un post specifico in base all’ID passato come parametro. Se trova il post, restituisce i dettagli e un’anteprima dell’immagine; altrimenti, restituisce un messaggio di errore Post non trovato
router.get('/:id', (req,res)=>{
    const post = posts.find(p => p.id == req.params.id);
    const postWithPreview = {
        ...post,
        imagePreview: '<img src="${post.image}" alt="${post.title}" style="max-width: 200px;"/>'
    };
    res.json(postWithPreview);
});

// (Create) Simula la creazione di un nuovo post, restituendo un messaggio di conferma
router.post("/", (req,res)=>{
    res.json("creiamo un nuovo elemento");
});

// (Update) Simula l’aggiornamento completo di un post. Restituisce un messaggio che conferma la modifica
router.put("/:id",(req,res)=>{
    const postId = req.params.id;
    res.json("modifichiamo i dati di uno specifico elemento ${postId}");
});

// (Modify) Simula la modifica di uno o più campi di un post. Anche qui viene restituito un messaggio di conferma
router.patch('/:id',(req,res)=>{
    const postId = req.params.id;
    res.json("modifichiamo gli specifici dati uno specifico elemento ${postId}");
});

// (Delete) Simula l’eliminazione di un post specifico, utilizzando l’ID come riferimento
router.delete('/:id', (req,res)=>{
    const postId = req.params.id;
    res.json("eliminiamo un elemento specifico ${postId}");
});

module.exports = router;