<?php

try {
    $DB_DSN = 'mysql:host=localhost; dbname=utilisateurs';
    $DB_USER = 'root';
    $DB_PASS = '';
    $PDO = new PDO($DB_DSN, $DB_USER, $DB_PASS);
    // echo 'Connexion établie';
    // return TRUE;
} catch (PDOException $e) {
    die('ERREUR :' . $e->getMessage());
}

function register()
{
    global $PDO;
    // Si les variables existent et qu'elles ne sont pas vides
    $name = htmlspecialchars($_POST['name']);
    $firstName = htmlspecialchars($_POST['firstname']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);

    // On vérifie si l'utilisateur existe
    $check = $PDO->prepare('SELECT email, password FROM utilisateurs WHERE email = ?');
    $check->execute(array($email));
    $data = $check->fetch();
    $row = $check->rowCount();

    //s'il n'existe pas, que le mail est au bon format, que les pwd matchent, on créé l'user en DB
    if ($row === 0) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            if ($password === $password2) {
                $password = password_hash($password, PASSWORD_BCRYPT);
                $insert = $PDO->prepare('INSERT INTO utilisateurs(nom, prenom, email, password) VALUES(:nom, :prenom, :email, :password)');
                $insert->execute(array(
                    'nom' => $name,
                    'prenom' => $firstName,
                    'email' => $email,
                    'password' => $password,
                ));
                // et on affiche le message d'inscription
                echo json_encode(['response' => 'is_ok', 'message' => 'Inscription réussie']);
            }
        }
    }
}


function signIn($email, $password)
{
    global $PDO;
    // On vérifie si l'utilisateur existe
    $check = $PDO->prepare('SELECT email, password FROM utilisateurs WHERE email = ?');
    $check->execute(array($email));
    $data = $check->fetch();
    $row = $check->rowCount();

    // s'il existe, on retransforme son pwd et on fait afficher le message de succès de connexion
    if ($row === 1) {
        $hashedPassword = $data['password'];
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['email'] = $email;
            echo json_encode(['response' => 'C_is_ok', 'Cmessage' => 'Connexion réussie']);
        }
    }
}
