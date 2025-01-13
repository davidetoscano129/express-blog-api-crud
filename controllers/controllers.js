const posts = require("../data"); // Importa i dati

// Ottieni tutti i post
const getAllPosts = (req, res) => {
    res.json({
        posts,
        length: posts.length,
    });
};

// Ottieni un singolo post tramite ID
const getPostById = (req, res) => {
    const postId = parseInt(req.params.id); // Confronto ID come numero
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    const postWithPreview = {
        ...post,
        preview: `<img src="${post.image}" alt="${post.title}" style="max-width: 200px;">`,
    };

    res.json(postWithPreview);
};

// Crea un nuovo post
const createPost = (req, res) => {
    const newPost = req.body;

    // Controlla se l'oggetto è valido
    if (!newPost || !newPost.title || !newPost.content) {
        return res.status(400).json({ error: "Dati incompleti per creare un nuovo post" });
    }

    // Aggiungi un nuovo ID incrementale
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const postToAdd = { id: newId, ...newPost };

    posts.push(postToAdd);

    console.log("Nuovo post aggiunto:", postToAdd);
    res.status(201).json(postToAdd);
};

// Aggiorna un post esistente
const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedData = req.body;

    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts[postIndex] = { ...posts[postIndex], ...updatedData };

    console.log("Post aggiornato:", posts[postIndex]);
    res.json(posts[postIndex]);
};

// Elimina un post esistente
const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);

    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    posts.splice(postIndex, 1);

    console.log("Lista aggiornata:", posts);
    res.status(200).json({ message: "Post eliminato con successo" });
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};