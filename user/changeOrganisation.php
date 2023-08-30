<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/file.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$file = new File();
if (isset($_FILES['image']) && $_FILES['image']['name'] !== '') {
    $statusFile = $file->uploadFile($_FILES['image']);
    if ($statusFile['status'] == 'uploaded') {
        $imageName = $statusFile['fileName'];
    }
} else {
    $imageName = "undefined";
    $organisation = new Organisation(isset($_POST['id']) ? $_POST['id'] : die('id'));
    $db = new Database();
    $organisation->setConnection($db->getConnection());
    $imageName = $organisation->selectorganisation()[0]['image'];
}

$organisation = new Organisation
(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
    isset($_POST['name']) ? $_POST['name'] : die('name'), 
    isset($_POST['mail']) ? $_POST['mail'] : die('mail'),
    isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : die('password'),
    isset($imageName) ? $imageName : die(),
    isset($_POST['about']) ? $_POST['about'] : die('about'),
    1
    
);

$db = new Database();
$organisation->setConnection($db->getConnection());



print_r(json_encode($organisation->updateOrganisation()));
