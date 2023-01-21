<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>formulaire</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,800">
</head>

<body>
    <div class=" container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Inscrivez-vous</h1>
                <div class="social-container">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <input type="text" placeholder="Nom">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Mot de passe">
                <input type="password2" placeholder="Confirmation de Mot de passe">
                <button>Créer un compte</button>
            </form>
        </div>
        <div class="form-container login-container">
            <form action="#">
                <h1>Bienvenue</h1>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Mot de passe">
                <button>Se connecter</button>
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