<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/tour_image.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation();

$tourImage = new TourImage
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$tourImage->setConnection($db->getConnection());

print_r($tourImage->deleteTourImage());

