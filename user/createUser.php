<?php

//SVI
require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/file.php';
require_once '../objects/mailer.php';

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$user = new User
(
    null,
    isset($_POST['name']) ? $_POST['name'] : die('name'), 
    isset($_POST['surname']) ? $_POST['surname'] : die('surname'), 
    isset($_POST['identity_number']) ? $_POST['identity_number'] : die('identity_number'), 
    isset($_POST['country']) ? $_POST['country'] : die('country'), 
    isset($_POST['address']) ? $_POST['address'] : die('address'),
    isset($_POST['mail']) ? $_POST['mail'] : die('mail'),
    isset($_POST['password']) ? $_POST['password'] : die('password'),
    isset($_POST['mobile_number']) ? $_POST['mobile_number'] : die('mobile_number'),
    isset($imageName) ? $imageName : die()
);

$db = new Database();
$user->setConnection($db->getConnection());

$answer = $user->insertUser();

if($answer["status"]=="inserted")
{
    $mailer = new MyPHPMailerClass();
    $to = $_POST['mail'];
    $subject = 'Verification';
    $body = 'Verifide your mail by clicking on this link: http://localhost/TourMeAround/user/verifyUserAccount.php?id='.$answer["id"];
    $mailer->sendEmail($to, $subject, $body);
}

print_r(json_encode($answer));



