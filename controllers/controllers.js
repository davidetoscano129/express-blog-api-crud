const posts = require("../data"); // Importa i dati

// Ottiene tutti i post
const getAllPosts = (req, res) => {
  res.json({
    posts,
    length: posts.length,
  });
};

// Ottiene un singolo post tramite ID
const getPostById = (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id)); // Confronto ID come numero
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  const postWithPreview = {
    ...post,
    preview: `<img src="${post.image}" alt="${post.title}" style="max-width: 200px;">`,
  };

  res.json(postWithPreview);
};

// Creazione di un nuovo post
const createPost = (req, res) => {
  const { title, content, image, tags } = req.body;

  // Stampa il corpo della richiesta nel terminale
  console.log("Corpo della richiesta ricevuto:", req.body);

  // Validazione dei campi obbligatori
  if (!title || !content || !image || !tags) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }

  // Creazione del nuovo post
  const newPost = {
    id: posts.length + 1, // Genera un ID incrementale
    title,
    content,
    image,
    tags,
  };

  posts.push(newPost); // Aggiungi il nuovo post all'elenco
  res.status(201).json(newPost); // Rispondi con il nuovo post
};

// Placeholder per altre funzionalità CRUD
const updatePost = (req, res) => {
  res.json("Aggiornamento di un post specifico non implementato ancora.");
};

const modifyPostFields = (req, res) => {
  res.json("Modifica di specifici campi di un post non implementata ancora.");
};

const deletePost = (req, res) => {
  res.json("Eliminazione di un post non implementata ancora.");
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  modifyPostFields,
  deletePost,
};