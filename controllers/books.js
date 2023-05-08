const { error } = require("console");
const Book = require("../models/Book");
const fs = require("fs");
const { bool } = require("sharp");


// Controleurs CRUD de base.

exports.createBook = (req, res, next) => {
	const bookObject = JSON.parse(req.body.book);
	delete bookObject._id;
	delete bookObject._userId;
	const book = new Book({
		...bookObject,
		userId: req.auth.userId,
		imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
	});

	book.save()
		.then(() => res.status(201).json({ message: "Objet enregistré !" }))
		.catch(error => res.status(400).json({ error }));
};

exports.getOneBook = (req, res, next) => {
	Book.findOne({ _id: req.params.id })
		.then(book => res.status(200).json(book))
		.catch(error => res.status(404).json({ error }));
};

exports.getAllBooks = (req, res, next) => {
	Book.find()
		.then(books => res.status(200).json(books))
		.catch(error => res.status(400).json({ error }));
};

exports.modifyBook = (req, res, next) => {
	const bookObject = req.file ? {
		...JSON.parse(req.body.book),
		imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
	} : {...req.body};

	delete bookObject._userId;

	Book.findOne({_id: req.params.id})
		.then((book) => {
			if (book.userId != req.auth.userId) {
				return res.status(403).json({ message: "403: unauthorized request" });
			} else {
				// Suppresion de l'ancienne image si une nouvelle est insérée dans la modification
				if (req.file) {
					const oldFilename = book.imageUrl.split("/images/")[1];
					fs.unlink(`images/${oldFilename}`, (error) => {
						if (error) {
							return res.status(500).json({ error });
						};
					});
				};

				Book.updateOne({ _id: req.params.id }, bookObject )
					.then(() => res.status(200).json({ message: "Objet modifié !" }))
					.catch(error => res.status(400).json({ error }));
			};
		})
		.catch(error => res.status(400).json({ error }));
};

exports.deleteBook = (req, res, next) => {
	Book.findOne({ _id: req.params.id })
		.then(book => {
			if (book.userId != req.auth.userId) {
				return res.status(403).json({ message: "403: unauthorized request" })
			} else {
				// Suppression du fichier image
				const filename = book.imageUrl.split("/images/")[1];
				fs.unlink(`images/${filename}`, (error) => {
					if (error) {
						return res.status(500).json({ error });
					} else {
					// Si suppression du fichier image OK, suppression du livre en BDD.
					Book.deleteOne({ _id: req.params.id })
						.then(() => res.status(200).json({ message: "Objet supprimé !" }))
						.catch(error => res.status(400).json({ error }));
					};
				});
			};
		})
		.catch(error => res.status(500).json({ error }));
};


// Controleur pour la gestion des notes des livres.

exports.createBookRating = (req, res, next) => {
	// Création de l'objet Rating avec le userId du Token et non celui envoyé par le front pour la sécurité.
	const ratingObject = { userId: req.auth.userId, grade: req.body.rating };

	if (ratingObject.grade < 0 || ratingObject.grade > 5) {
		return res.status(400).json({ error });
	};

	Book.findOne({ _id: req.params.id })
		.then((book) => {
			// Contrôle si l'utilisateur loggé est le créateur du livre.
			if (book.userId === req.auth.userId) {
				return res.status(403).json({ message: "403: unauthorized request test" });
			};
			// Contrôle si l'utilisateur a déjà noté ce livre.
			if (book.ratings.some(rating => rating.userId === req.auth.userId)) {
				return res.status(403).json({ message: "403: unauthorized request" });
			};
			
			// Enregistrement de la note du livre en BDD.
			book.ratings.push(ratingObject);
			book.save()
				.then((book) => {
					// Calcul de la note moyenne et enregistrement de celle-ci en BDD.
					book.averageRating = Math.round(book.ratings.reduce((sum, rating) => sum + rating.grade, 0) / book.ratings.length);
					book.save()
						.then(() => res.status(200).json( book ))
						.catch(error => res.status(500).json({ error }));
					})
				.catch(error => res.status(500).json({ error }));
		})
		.catch(error => res.status(400).json({ error }));
};


// Contrôleur pour la récupération des 3 livres ayant les meilleures notes moyennes.

exports.bestAverageRatings = (req, res, next) => {
	Book.find({})
		.sort({ averageRating: "descending" })
		.limit(3)
			.then((books) => res.status(200).json( books ))
			.catch(error => res.status(500).json({ error }));
};