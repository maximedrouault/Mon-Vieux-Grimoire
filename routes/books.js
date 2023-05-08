const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp");

const booksCtrl = require("../controllers/books");


// Routes pour la gestion des notes des livres.

router.post("/:id/rating", auth, booksCtrl.createBookRating);
router.get("/bestrating", booksCtrl.bestAverageRatings);

// Routes CRUD de base.

router.post("/", auth, multer, sharp, booksCtrl.createBook);
router.get("/:id", booksCtrl.getOneBook);
router.get("/", booksCtrl.getAllBooks);
router.put("/:id", auth, multer, sharp, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);


module.exports = router;