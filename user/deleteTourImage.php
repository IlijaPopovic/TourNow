<?php

require_once '../config/database.php';
require_once '../objects/tour_image.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$tourImage = new TourImage
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$tourImage->setConnection($db->getConnection());

print_r(json_encode($tourImage->deleteTourImage()));

