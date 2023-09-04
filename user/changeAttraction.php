<?php

require_once '../config/database.php';
require_once '../objects/attraction.php';
require_once '../objects/fileHandler.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" || $session->checkClient()['id']!=="no" ? null : die('nema ulogovane organisacije');

$file = new FileHandler();
if (isset($_FILES['image']) && $_FILES['image']['name'] !== '') {
    $statusFile = $file->uploadFile($_FILES['image']);
    if ($statusFile['status'] == 'uploaded') {
        $imageName = $statusFile['fileName'];
        
        $attraction = new Attraction(isset($_POST['id']) ? $_POST['id'] : die('id'));
        $db = new Database();
        $attraction->setConnection($db->getConnection());
        $deleteImage = $attraction->selectAttraction()[0]['image'];
        $file->deleteFile($deleteImage);
    }
} else {
    $imageName = "undefined";
    $attraction = new Attraction(isset($_POST['id']) ? $_POST['id'] : die('id'));
    $db = new Database();
    $attraction->setConnection($db->getConnection());
    $imageName = $attraction->selectAttraction()[0]['image'];
}

$attraction = new Attraction
(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
    isset($_POST['name']) ? $_POST['name'] : die('name'), 
    isset($imageName) ? $imageName : die(),
    isset($_POST['date_start']) ? $_POST['date_start'] : die('date_start'), 
    isset($_POST['date_end']) ? $_POST['date_end'] : die('date_end'), 
    isset($_POST['description']) ? $_POST['description'] : die('description'),
    isset($_POST['price']) ? $_POST['price'] : die('price'),
    isset($_POST['max_people']) ? $_POST['max_people'] : die('max_people'),
    isset($_POST['destination_id']) ? $_POST['destination_id'] : die('destination_id'),
);

$db = new Database();
$attraction->setConnection($db->getConnection());

print_r(json_encode($attraction->updateAttraction()));

