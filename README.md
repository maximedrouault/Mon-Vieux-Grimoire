# Bonjour à tous ! 👋

#### Je suis Maxime DROUAULT,
Ceci est mon premier projet **Back-end**. J'ai réalisé l'ensemble de ce projet Back, celui-ci est basé sur **Express.JS** et **Node.JS** et stocke les données sur une base de données **MongoDB** à l'aide de **Mongoose**.<br>
**BCRYPT** a été utilisé pour la **HASHAGE** des passwords et le stockage en BDD, ainsi que leurs comparaisons lors de l'authentification.<br>
**JWT** a été utilisé pour la délivrance d'un **Token** lors d'une authentification correcte.<br>
**MULTER** a été utilisé pour la gestion de l'**UPLOAD** des fichiers images des livres.<br>
**SHARP** a été utilisé pour la **COMPRESSION** des fichiers images récupérés par **MULTER** et ainsi être conforme à du **GREEN CODE**.

<img src="https://maximedrouault.vercel.app/img/mon-vieux-grimoire.jpg" alt="Capture du site web Mon Vieux Grimoire" />

##### Voici les étapes qui m'ont permis de réaliser ce projet :
- Mise en place de l'environnement **Node JS** et création d'un serveur **Express JS**.
- Utilisation de **MONGOOSE** pour définir un **SCHEMA de données** pour **MONGODB**.
- Intialisation et connexion de la **BASE DE DONNEES MONGODB**.
- Ensuite j'ai mis en place le système d'authentification géré par **BCRYPT** et **JWT** pour sécuriser les routes le nécéssitant.
- J'ai par la suite intégré la gestion des fichiers images à l'aide de **MULTER** et **SHARP** pour la compression de ceux-ci.
- Par la suite, toutes les routes **CRUD** ont été implémentées. Certaines avec **AUTH**.
- De la **LOGIQUE** pour le stockage des **NOTATIONS** de livre avec contrôle en fonction du **"userId"** a été mise en place.
- De la **LOGIQUE** a également été mise en place pour recalculer **LA NOTE MOYENNE** du livre après modifications.
- De la **LOGIQUE** a aussi été intégrée pour **TRIER** et faire ressortir les **TROIS LIVRES** les **MIEUX NOTÉS**.

##### Une attention toute particulière a été apportée aux éléments suivants :
- Le **"userId"** est **ENCODÉ** dans le **TOKEN JWT**. Ainsi, pour une **SECURITE MAXIMUM**, le code prend en compte celui-ci dans les **REQUÊTES** et non celui envoyé par le **FRONT** qui pourrait être **USURPÉ**.
- **MONGOOSE** a été associé à **UNIQUE VALIDATOR** afin de **GARANTIR** que la **création de plusieurs comptes avec la même adresse e-mail** ne soit **PAS POSSIBLE**.
- Le **DECOUPAGE DU CODE** a été effectué de façon **MODULAIRE** afin d'en **ACCROÎTRE** très largement sa **VISIBILITÉ** et sa **MAINTENANBILITÉ**.

###### Les compétences et technologies mises en œuvre sur ce projet sont les suivantes :

![HTML](https://img.shields.io/badge/HTML-%23FFac45.svg?&style=for-the-badge&logo=html5&logoColor=white&color=orange)
![CSS](https://img.shields.io/badge/CSS-%23FFac45.svg?&style=for-the-badge&logo=css3&logoColor=white&color=blue)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-%23FFac45.svg?&style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![API](https://img.shields.io/badge/API-CB3837?style=for-the-badge&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)


#### Je vous propose de voir mon portfolio pour voir ce que je fais avec le lien juste ci-dessous (ME WEBSITE).

<a href='https://maximedrouault.vercel.app/' target="_blank"><img alt='Mon site Portfolio' src='https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white'/></a>
<a href='https://www.linkedin.com/in/maximedrouault/' target="_blank"><img alt='Linkedin' src='https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'/></a>
<a href='https://github.com/maximedrouault' target="_blank"><img alt='Github' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'/></a>

#### Si vous voulez tester le projet de votre côté, voici les instructions :<br>
- Clonez le dépôt :<br>
**`https://github.com/maximedrouault/Mon-Vieux-Grimoire.git`**
- Renommez le fichier **`.ENV.EXAMPLE`** en **`.ENV`**
- Mettez y vos informations de connexion à votre **MONGODB**.
```
- DB_URL= Url de connexion à votre MongoDB
- DB_LOGIN= Login de connexion à votre MongoDB
- DB_PASSWORD= Mot de passe de connexion à votre MongoDB
- TOKEN_SECRET= Chaîne de caractère de votre choix utilisé pour la génération des Tokens via BCRYPT
``` 
- À partir du répertoire **Mon-Vieux-Grimoire** :<br>
- Faites **`NPM INSTALL`** puis **`NPM START`**, cela permettra d'installer les dépendances du projet et de démarrer celui-ci.
- Ensuite, le **Back-end** sera démarré et écoutera sur le **`PORT : 4000`** par défaut.<br>
Vous pouvez tester le projet avec **POSTMAN**.
