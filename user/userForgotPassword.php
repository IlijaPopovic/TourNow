<?php
require_once '../config/database.php';
require_once '../objects/mailer.php';

$mailer = new MyPHPMailerClass();
$to = $_POST['mail'];
$subject = 'Password change';
$body = 'Change your password by clicking on this link: http://localhost/TourMeAround/user/changeUserPassword.php?mail='.$_POST["mail"].'&password='.$_POST["password"];
$mailer->sendEmail($to, $subject, $body);

print_r(json_encode(array('status'=>'updated')));