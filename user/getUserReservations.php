<?php
// SVI
require_once '../config/database.php';
require_once '../objects/reservation.php';

$reservation = new Reservation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$reservation->setConnection($db->getConnection());

print_r(json_encode($reservation->selectUserReservations()));

