const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers');

// Definizione rotte
router.get('/', controllers.getAllPosts);
router.get('/:id', controllers.getPostById);
router.post("/", controllers.createPost);
router.put("/:id", controllers.updatePost);
router.patch('/:id', controllers.modifyPostFields);
router.delete('/:id', controllers.deletePost);

module.exports = router;