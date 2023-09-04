<?php

require_once '../config/database.php';
require_once '../objects/tour.php';
require_once '../objects/tour_image.php';
require_once '../objects/fileHandler.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" || $session->checkAdmin()['id']!=="no" ? null : die('nema ulogovane organisacije');

$tour = new Tour
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$tour->setConnection($db->getConnection());

$tourImage = new TourImage();
$tourImage->tour_id = isset($_POST['id']) ? $_POST['id'] : die();
$db2 = new Database();
$tourImage->setConnection($db2->getConnection());

$array = $tourImage->selectTourImages();

$file = new FileHandler();

foreach($array as $image)
{
    $file->deleteFile($image['name']);
}

print_r(json_encode($tour->deleteTour()));

