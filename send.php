<?php
header("Access-Control-Allow-Origin: *"); // pour dev uniquement
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // $to = "universitepriveambohidratrimo@gmail.com"; // ← Mets ici l’adresse email de destination
    $to = "andryratsiho26@gmail.com"; // ← Mets ici l’adresse email de destination
    $subject = "Nouveau message depuis le site universitaire";

    // Nettoyage des données
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $dept = htmlspecialchars($_POST['dept'] ?? '');
    $msg = htmlspecialchars($_POST['msg'] ?? '');

    $message = "Nom: $name\nEmail: $email\nDépartement: $dept\nMessage:\n$msg";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    http_response_code(405); // méthode non autorisée
    echo "Méthode non autorisée.";
}
?>
