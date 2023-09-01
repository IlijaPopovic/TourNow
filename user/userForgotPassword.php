<?php
require_once '../config/database.php';
require_once '../objects/mailer.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();

$token = bin2hex(random_bytes(32)); // Generate a 64-character token

$session->set('mail', $_POST['mail']);
$session->set('reset_token', $token);
$session->set('new_password', password_hash($_POST['password'], PASSWORD_BCRYPT));


// Construct the reset link
$resetLink = "https://noclass.stud.vts.su.ac.rs/TourMeAround/user/changeUserPassword.php?token=$token";

// Send the email
$mailer = new MyPHPMailerClass();
$to = $_POST['mail'];
$subject = 'Password change';
$body = "Change your password by clicking on this link: $resetLink";
$mailer->sendEmail($to, $subject, $body);

print_r(json_encode(array('status' => 'updated')));