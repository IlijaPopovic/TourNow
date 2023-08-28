<?php

require_once '../config/database.php';
require_once '../objects/tour.php';
require_once '../objects/tour_image.php';
require_once '../objects/destination.php';
require_once '../objects/organisation.php';
require_once '../objects/transport.php';
require_once '../objects/room.php';

$tour = new Tour
(
    isset($_POST['id']) ? $_POST['id'] : die('NEMA')
);

$db = new Database();
$tour->setConnection($db->getConnection());

$tourImage = new TourImage();
$tourImage->tour_id =  isset($_POST['id']) ? $_POST['id'] : die('NEMA');
$tourImage->setConnection($db->getConnection());

$tourData = $tour->selectTour();
$destination_id = $tourData[0]['destination_id'];
$organisation_id = $tourData[0]['organisation_id'];

$destination = new Destination($destination_id);
$destination->setConnection($db->getConnection());

$organisation = new Organisation($organisation_id);
$organisation->setConnection($db->getConnection());

$transport = new Transport($organisation_id);
$transport->tour_id =  isset($_POST['id']) ? $_POST['id'] : die('NEMA');
$transport->setConnection($db->getConnection());

$room = new Room($organisation_id);
$room->tour_id =  isset($_POST['id']) ? $_POST['id'] : die('NEMA');
$room->setConnection($db->getConnection());

print_r(json_encode(
    array_merge(
        $tourData, 
        $destination->selectDestination(), 
        array($tourImage->selectTourImages()), 
        $organisation->selectOrganisation(),
        array($transport->selectTransports()),
        array($room->selectRooms())
    )));
