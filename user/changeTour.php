<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/tour.php';
require_once '../objects/tour_image.php';
require_once '../objects/file.php';
// require_once '../objects/sessionHandler.php';

// $session = new MySessionHandler();
// $session->checkOrganisation();

$tour = new Tour
(
    isset($_POST['id']) ? $_POST['id'] : die('no id'),
    isset($_POST['name']) ? $_POST['name'] : die('no name'), 
    isset($_POST['date_start']) ? $_POST['date_start'] : die('no date start'), 
    isset($_POST['date_end']) ? $_POST['date_end'] : die('no date end'),
    isset($_POST['description']) ? $_POST['description'] : die('no description'), 
    isset($_POST['max_people']) ? $_POST['max_people'] : die('no max people'),
    isset($_POST['type']) ? $_POST['type'] : die('no type'),
    isset($_POST['price']) ? $_POST['price'] : die('no price'),
    1,
    isset($_POST['organisation_id']) ? $_POST['organisation_id'] : die('no organisation'),
    isset($_POST['destination_id']) ? $_POST['destination_id'] : die('no destination')  
);

$db = new Database();
$tour->setConnection($db->getConnection());

print_r(json_encode($dataTour = $tour->updateTour()));

//var_dump($_FILES);
$file = new File();  

$file = new File();
if (isset($_FILES['image']) && $_FILES['image']['name'] !== '') {
    $dataImage = $file->uploadFiles($_FILES['image']);

    foreach($dataImage['fileName'] as $fileName)
    {
        $tourImage = New TourImage(
            NULL,
            $fileName,
            "ne",
            $_POST['id']
        );
        $tourImage->setConnection($db->getConnection());
        $tourImage->insertTourImage();
    }
} 