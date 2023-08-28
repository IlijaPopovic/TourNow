<?php

require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog');

$reservation = new Reservation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$reservation->setConnection($db->getConnection());

print_r(json_encode($reservation->deleteReservation()));

