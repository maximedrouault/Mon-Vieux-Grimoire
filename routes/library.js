const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const libraryCtrl = require("../controllers/library");

router.post("/", auth, multer, libraryCtrl.createBook);
router.get("/:id", libraryCtrl.getOneBook);
router.get("/", libraryCtrl.getAllBooks);
router.put("/:id", auth, multer, libraryCtrl.modifyBook);
router.delete("/:id", auth, libraryCtrl.deleteBook);

module.exports = router;