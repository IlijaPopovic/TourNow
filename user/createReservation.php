<?php

require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/transport.php';
require_once '../objects/room.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog klijenta');

$reservation = new Reservation
(
    null,
    null,
    1, 
    isset($_POST['user_id']) ? $_POST['user_id'] : die('user'), 
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die('tour'),
    isset($_POST['transport_id']) ? $_POST['transport_id'] : null,
    isset($_POST['room_id']) ? $_POST['room_id'] : null
);

if(isset($_POST['transport_id']))
{
    $transport = new Transport($_POST['transport_id']);
    $db2 = new Database();
    $transport->setConnection($db2->getConnection());
    $transport->updateTransportBooking();
}

if(isset($_POST['room_id']))
{
    $room = new Room($_POST['room_id']);
    $db3 = new Database();
    $room->setConnection($db3->getConnection());
    $room->updateRoomBooking();
}

$db = new Database();
$reservation->setConnection($db->getConnection());

print_r(json_encode($reservation->insertReservation()));