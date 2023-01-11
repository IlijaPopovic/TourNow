<?php
//SVI
require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/file.php';

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$user = new User
(
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['surname']) ? $_POST['surname'] : die(), 
    isset($_POST['identity_number']) ? $_POST['identity_number'] : die(), 
    isset($_POST['country']) ? $_POST['country'] : die(), 
    isset($_POST['mail']) ? $_POST['mail'] : die(), 
    isset( $_POST['address']) ? $_POST['address'] : die(), 
    isset($_POST['password']) ? $_POST['password'] : die(), 
    isset($_POST['mobile_number']) ? $_POST['mobile_number'] : die(),
    isset($imageName) ? $imageName : die()
);

$db = new Database();
$user->setConnection($db->getConnection());

print_r($user->insertUser());

