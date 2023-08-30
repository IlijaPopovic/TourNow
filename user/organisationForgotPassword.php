<?php
require_once '../config/database.php';
require_once '../objects/mailer.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();

$token = bin2hex(random_bytes(32)); // Generate a 64-character token

$session->set('omail', $_POST['mail']);
$session->set('oreset_token', $token);
$session->set('onew_password', password_hash($_POST['password'], PASSWORD_BCRYPT));


// Construct the reset link
$resetLink = "http://localhost/TourMeAround/user/changeOrganisationPassword.php?otoken=$token";

// Send the email
$mailer = new MyPHPMailerClass();
$to = $_POST['mail'];
$subject = 'Password change';
$body = "Change your password by clicking on this link: $resetLink";
$mailer->sendEmail($to, $subject, $body);

print_r(json_encode(array('status' => 'updated')));