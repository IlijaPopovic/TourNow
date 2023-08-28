<?php

require_once '../config/database.php';
require_once '../objects/destination.php';
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
    $destination = new Destination(isset($_POST['id']) ? $_POST['id'] : die('id'));
    $db = new Database();
    $destination->setConnection($db->getConnection());
    $imageName = $destination->selectDestination()[0]['image'];
}

$destination = new Destination
(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
    isset($_POST['name']) ? $_POST['name'] : die('name'), 
    isset($_POST['coordinates']) ? $_POST['coordinates'] : die('coordinates'),
    isset($_POST['country']) ? $_POST['country'] : die('country'),
    isset($_POST['description']) ? $_POST['description'] : die('description'),
    isset($imageName) ? $imageName : die()
);

$db = new Database();
$destination->setConnection($db->getConnection());



print_r(json_encode($destination->updateDestination()));
