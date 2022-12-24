<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/reservation.php';

$reservation = new Reservation
(
    null,
    null,
    isset($_POST['tour_group']) ? $_POST['tour_group'] : die(), 
    isset($_POST['user_id']) ? $_POST['user_id'] : die(), 
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die()
);

$db = new Database();
$reservation->setConnection($db->getConnection());

print_r($reservation->insertReservation());

