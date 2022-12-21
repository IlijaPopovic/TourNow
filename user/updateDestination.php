<?php
// ADMIN SAMO
require_once '../config/database.php';
require_once '../objects/destination.php';

$destination = new Destination
(
    isset($_POST['id']) ? $_POST['id'] : die(),
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['coordinates']) ? $_POST['coordinates'] : die(), 
    isset($_POST['country']) ? $_POST['country'] : die()
);

$db = new Database();
$destination->setConnection($db->getConnection());

print_r($destination->updateDestination());

