# Mon-Vieux-Grimoire

Comment lancer le projet ?
Avec npm
Faites la commande npm install pour installer les dépendances puis npm start pour lancer le projet.
Le code sur ce repo est le Back-end. Le Front-end est disponible via ce repo : https://github.com/OpenClassrooms-Student-Center/P7-Dev-Web-livres

Le projet a été testé sur node 19.

Il faudra renomer le fichier .env.example en .env et renseigner celui-ci avec les informations de connexion à votre MongoDB.

À l'intérieur de ce fichier, remplir les champs suivants :

	- DB_URL= Url de connexion à votre MongoDB
	- DB_LOGIN= Login de connexion à votre MongoDB
	- DB_PASSWORD= Mot de passe de connexion à votre MongoDB
	- TOKEN_SECRET= Chaîne de caractère de votre choix utilisé pour la génération des Tokens via BCRYPT