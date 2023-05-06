const multer = require("multer");

const MIME_TYPES = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png"
};

// Filtrage pour l'import des images JPG et PNG seulement.

function fileFilter(req, file, callback) {
	if (MIME_TYPES[file.mimetype]) {
		callback(null, true);
	} else {
		callback(new Error("Le fichier doit être une image de type jpg ou png"));
	};
};

// Configuration du stockage de Multer pour gérer le chargement du fichier image.

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "images")
	},
	filename: (req, file, callback) => {
		const name = file.originalname.substring(0, file.originalname.lastIndexOf('.')).split(" ").join("_");
		const extension = MIME_TYPES[file.mimetype];
		callback(null, name + Date.now() + "." + extension);
	}
});

module.exports = multer({ storage, fileFilter }).single("image");