const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

// Configuration DOTENV
dotenv.config();

// Configuration de EXPRESS-RATE-LIMIT
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Fenêtre de 15 minutes
  max: 500, // Limit à 500 requêtes par fenêtre
  standardHeaders: true, // Renvoi des informations de limite dans les en-têtes `RateLimit-*`
  legacyHeaders: false // Désactivation des anciennes en-têtes de style hérité `X-RateLimit-*`
})

const booksRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

// Application du RATE-LIMIT à toutes les requêtes.
app.use(limiter);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;