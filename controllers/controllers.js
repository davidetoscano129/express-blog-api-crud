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
  const postId = parseInt(req.params.id); // Confronta l'ID come numero
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json(post);
};

// Crea un nuovo post
const createPost = (req, res) => {
  const newPost = {
    id: posts.length + 1, // Genera un nuovo ID
    ...req.body, // Prendi i dati dal body della richiesta
  };
  posts.push(newPost);
  res.status(201).json(newPost); // Risposta con il nuovo post
};

// Aggiorna completamente un post
const updatePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  posts[postIndex] = { id: postId, ...req.body }; // Sostituisci il post
  res.json(posts[postIndex]);
};

// Modifica campi specifici di un post
const modifyPostFields = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  Object.assign(post, req.body); // Modifica solo i campi passati
  res.json(post);
};

// Elimina un post
const deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  posts.splice(postIndex, 1); // Rimuovi il post
  res.status(204).send(); // Nessun contenuto
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  modifyPostFields,
  deletePost,
};