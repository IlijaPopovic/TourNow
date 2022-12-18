<?php

require '../config/database.php';
require '../objects/organisation.php';
require '../objects/File.php';

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$organisation = new Organisation
(
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['mail']) ? $_POST['mail'] : die(), 
    isset($_POST['password']) ? $_POST['password'] : die(), 
    isset($imageName) ? $imageName : die(),
    isset($_POST['about']) ? $_POST['about'] : die(), 
    isset($_POST['enabled']) ? $_POST['enabled'] : die()
    
);

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r($organisation->insertOrganisation());

