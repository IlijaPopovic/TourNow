<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/tour.php';
require_once '../objects/tour_image.php';
require_once '../objects/file.php';

$tour = new Tour
(
    NULL,
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

print_r($dataTour = $tour->insertTour());


$file = new File();
print_r($dataImage = $file->uploadFiles($_FILES['image']));

foreach($dataImage['fileName'] as $fileName)
{
    $tourImage = New TourImage(
        NULL,
        $fileName,
        "ne",
        $dataTour['id']
    );
    $tourImage->setConnection($db->getConnection());
    $tourImage->insertTourImage();
}






//var_dump($_POST);
//var_dump($_FILES);



