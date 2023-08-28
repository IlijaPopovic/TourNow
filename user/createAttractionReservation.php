<?php

require_once '../config/database.php';
require_once '../objects/attraction_reservation.php';
require_once '../objects/attraction.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog klijenta');

$attraction_reservation = new AttractionReservation
(
    null,
    isset($_POST['user_id']) ? $_POST['user_id'] : die(), 
    isset($_POST['attraction_id']) ? $_POST['attraction_id'] : die()
);

$db = new Database();
$attraction_reservation->setConnection($db->getConnection());

$attraction = new Attraction
(
    isset($_POST['attraction_id']) ? $_POST['attraction_id'] : die()
);

$db2 = new Database();
$attraction->setConnection($db2->getConnection());

$attraction->updateAttractionReservation();

print_r(json_encode($attraction_reservation->insertAttractionReservation()));

