<?php

require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/attraction_reservation.php';
require_once '../objects/user.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog korisnika');

$reservation = new Reservation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$reservation->setConnection($db->getConnection());
$data1 = $reservation->selectUserReservations();

$attraction_reservation = new AttractionReservation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db2 = new Database();
$attraction_reservation->setConnection($db2->getConnection());
$data2 = $attraction_reservation->selectUserAttractionReservation();

$user = new User
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$user->setConnection($db->getConnection());
$data3 = $user->selectUserAttractionReservations();
$data4 = $user->selectUserRoomReservations();
$data5 = $user->selectUserTransportReservations();

print_r(json_encode([$data1, $data2, $data3, $data4, $data5]));


