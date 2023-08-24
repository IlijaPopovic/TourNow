<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient();

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

print_r(json_encode($reservation->insertReservation()));

