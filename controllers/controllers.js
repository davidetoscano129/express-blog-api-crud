const posts = require('../data');

const getAllPosts = (req, res) => {
    res.json({
        data: posts,
        length: posts.length,
    });
};

const getPostById = (req, res) => {
    const post = data.find(p => p.id === req.params.id);
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }
    const postWithPreview = {
        ...post,
        preview: `<img src="${data.image}" alt="${data.title}" style="max-width: 200px;">`,
    };
    res.json(postWithPreview);
};

const createPost = (req, res) => {
    res.json("Crea un nuovo elemento");
};

const updatePost = (req, res) => {
    const postId = req.params.id;
    res.json(`Aggiorna un elemento specifico ${postId}`);
};

const modifyPostFields = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica campi specifici di un elemento ${postId}`);
};

const deletePost = (req, res) => {
    const postId = req.params.id;
    res.json(`Eliminazione di un elemento specifico ${postId}`);
};

// Esporto tutti i controller
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    modifyPostFields,
    deletePost,
};