const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

// Rotte definite
router.get("/", controllers.getAllPosts); // Ottieni tutti i post
router.get("/:id", controllers.getPostById); // Ottieni un post tramite ID
router.post("/", controllers.createPost); // Creazione (non implementata ancora)
router.put("/:id", controllers.updatePost); // Aggiornamento (non implementata ancora)
router.patch("/:id", controllers.modifyPostFields); // Modifica campi specifici (non implementata ancora)
router.delete("/:id", controllers.deletePost); // Eliminazione (non implementata ancora)

module.exports = router;