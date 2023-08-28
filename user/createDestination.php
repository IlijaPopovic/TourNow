<?php

require_once '../config/database.php';
require_once '../objects/destination.php';
require_once '../objects/file.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$destination = new Destination
(
    null,
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['coordinates']) ? $_POST['coordinates'] : die(), 
    isset($_POST['country']) ? $_POST['country'] : die(),
    isset($_POST['description']) ? $_POST['description'] : die(),
    isset($imageName) ? $imageName : die()
);

$db = new Database();
$destination->setConnection($db->getConnection());

print_r(json_encode($destination->insertDestination()));

