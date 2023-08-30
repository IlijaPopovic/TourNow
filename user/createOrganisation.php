<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/file.php';
require_once '../objects/mailer.php';

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$organisation = new Organisation
(
    null,
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['mail']) ? $_POST['mail'] : die(), 
    isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : die(), 
    isset($imageName) ? $imageName : die(),
    isset($_POST['about']) ? $_POST['about'] : die()
);

$db = new Database();
$organisation->setConnection($db->getConnection());

$answer = $organisation->insertOrganisation();

if($answer["status"]=="inserted")
{
    $mailer = new MyPHPMailerClass();
    $to = $_POST['mail'];
    $subject = 'Verification';
    $body = 'Verifide your mail by clicking on this link: http://localhost/TourMeAround/user/verifyOrganisationAccount.php?id='.$answer["id"];
    $mailer->sendEmail($to, $subject, $body);
}

print_r(json_encode($answer));