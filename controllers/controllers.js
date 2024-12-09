const posts = require("../data"); // Importa i dati

// Ottieni tutti i post
const getAllPosts = (req, res) => {
    res.json({
        data: posts,
        length: posts.length,
    });
};

// Ottieni un singolo post tramite ID
const getPostById = (req, res) => {
    const postId = parseInt(req.params.id); // Converte l'ID in numero
    const post = posts.find((p) => p.id === postId);
¢
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(post);
};

// Crea un nuovo post
const createPost = (req, res) => {
    const { title, content, image, tags } = req.body;

    // Controlla che tutti i campi siano presenti
    if (!title || !content || !image || !tags) {
        return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
    }

    // Crea un nuovo ID incrementale
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    // Crea il nuovo post
    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags,
    };

    // Aggiungi il nuovo post alla lista
    posts.push(newPost);

    // Rispondi con il nuovo post
    res.status(201).json(newPost);
};

// Aggiorna un post esistente
const updatePost = (req, res) => {
    const postId = parseInt(req.params.id); // Ottieni l'ID dal parametro della rotta
    const { title, content, image, tags } = req.body;

    // Trova il post da aggiornare
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    // Aggiorna i campi del post
    if (title) post.title = title;
    if (content) post.content = content;
    if (image) post.image = image;
    if (tags) post.tags = tags;

    // Rispondi con il post aggiornato
    res.json(post);
};

// Esporta le funzioni del controller
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
};