const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Utilisation de SHARP pour Redimensionner le fichier image préchargé par MULTER

module.exports = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  const filePath = req.file.path;
  const fileName = req.file.filename;
  const newName = `resized_${fileName}`;
  const outputFilePath = path.join("images", newName);

  sharp(filePath)
    .resize(405)
    .toFile(outputFilePath)
    .then(() => {
      fs.unlink(filePath, () => {
        req.file.filename = newName;
        req.file.path = outputFilePath;
        next();
      });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};