<?php
require_once './includes/functions.php';
session_start();

// ajout à la DB pour inscription
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['password2']) && isset($_POST['firstname'])) {
    register();
    die();
}


// comparaison pour connexion
if ((isset($_POST['email'])) && (isset($_POST['password']))) {
    signIn($_POST['email'], $_POST['password']);
    die();
}





?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="styles.css" />
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,800">
    <title>Accueil</title>

</head>

<body>
    <div class=" container" id="container">
        <div class="form-container sign-up-container">
            <form action="#" method="post" id="createForm">
                <h1>Inscrivez-vous</h1>
                <input type="text" id="name" name="name" placeholder="Nom" required>
                <input type="text" id="firstname" name="firstname" placeholder="Prenom" required>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <span class="error"></span>
                <input type="password" name="password" placeholder="Mot de passe" required>
                <input type="password" id="password2" name="password2" placeholder="Confirmation de Mot de passe" required>
                <span class="error" id="error"></span>
                <button type="submit" id="create">Créer un compte</button>
                <span id="creation"></span>
            </form>
        </div>
        <div class="form-container login-container">
            <form action="#" method="post" id="logForm">
                <h1>Bienvenue</h1>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" id="password" placeholder="Mot de passe" required>
                <span class="error" id="error"></span>
                <button type="submit" id="connect">Se connecter</button>
                <span id="connexion"></span>
            </form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Bienvenue</h1>
                    <button class="ghost" id="login">Se connecter</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Inscrivez-vous</h1>
                    <button class="ghost" id="signUp">Créer un compte</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>