<?php

require_once '../config/database.php';
require_once '../objects/attraction_reservation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog');

$attraction_reservation = new attractionReservation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$attraction_reservation->setConnection($db->getConnection());

print_r(json_encode($attraction_reservation->deleteAttractionReservation()));

