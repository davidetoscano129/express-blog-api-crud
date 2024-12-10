const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// Rotte definite
router.get("/", controllers.getAllPosts); // Ottieni tutti i post
router.get("/:id", controllers.getPostById); // Ottieni un post tramite ID
router.post("/", controllers.createPost); // Crea un nuovo post
router.put("/:id", controllers.updatePost); // Aggiorna un post esistente
router.delete("/:id", controllers.deletePost); // Elimina un post esistente

module.exports = router;