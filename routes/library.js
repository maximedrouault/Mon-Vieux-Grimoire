const express = require("express");
const router = express.Router();

const libraryCtrl = require("../controllers/library");

router.post("/", libraryCtrl.createBook);
router.get("/:id", libraryCtrl.getOneBook);
router.get("/", libraryCtrl.getAllBooks);
router.put("/:id", libraryCtrl.modifyBook);
router.delete("/:id", libraryCtrl.deleteBook);

module.exports = router;