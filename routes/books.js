const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sharp = require("../middleware/sharp");

const libraryCtrl = require("../controllers/books");

router.post("/", auth, multer, sharp, libraryCtrl.createBook);
router.get("/:id", libraryCtrl.getOneBook);
router.get("/", libraryCtrl.getAllBooks);
router.put("/:id", auth, multer, sharp, libraryCtrl.modifyBook);
router.delete("/:id", auth, libraryCtrl.deleteBook);

module.exports = router;