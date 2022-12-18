<?php

require '../config/database.php';
require '../objects/tour.php';
require '../objects/File.php';

// $file = new File();
// if (!isset($_FILES['image'])) die('nema slike');
// $statusFile = $file->uploadFile($_FILES['image']);
// if($statusFile['status'] == 'uploaded')
//     $imageName = $statusFile['fileName'];

var_dump($_POST);

$tour = new Tour
(
    isset($_POST['name']) ? $_POST['name'] : die('no name'), 
    isset($_POST['date_start']) ? $_POST['date_start'] : die('no date start'), 
    isset($_POST['date_end']) ? $_POST['date_end'] : die('no date end'),
    isset($_POST['description']) ? $_POST['description'] : die('no description'), 
    isset($_POST['max_people']) ? $_POST['max_people'] : die('no max people'),
    isset($_POST['type']) ? $_POST['type'] : die('no type'),
    isset($_POST['price']) ? $_POST['price'] : die('no price'),
    isset($_POST['enabled']) ? $_POST['enabled'] : die('no enabled'),
    isset($_POST['organisation_id']) ? $_POST['organisation_id'] : die('no organisation'),
    isset($_POST['destination_id']) ? $_POST['destination_id'] : die('no destination')  
);

$db = new Database();
$tour->setConnection($db->getConnection());

print_r($tour->insertTour());

