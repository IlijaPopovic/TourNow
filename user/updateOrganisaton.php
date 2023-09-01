<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/fileHandler.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$file = new FileHandler();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$organisation = new Organisation
(
    isset($_POST['id']) ? $_POST['id'] : die(),
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['mail']) ? $_POST['mail'] : die(), 
    isset($_POST['password']) ? $_POST['password'] : die(), 
    isset($imageName) ? $imageName : die(),
    isset($_POST['about']) ? $_POST['about'] : die(), 
    isset($_POST['enabled']) ? $_POST['enabled'] : die()
);

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r(json_encode($organisation->updateOrganisation()));

