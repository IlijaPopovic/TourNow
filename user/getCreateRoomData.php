<?php
// SVI

require_once '../config/database.php';
require_once '../objects/room.php';
require_once '../objects/tour.php';
require_once '../objects/accommodation.php';

$room = new Room();
$db = new Database();
$room->setConnection($db->getConnection());

// $tour = new Tour();
// $db = new Database();
// $tour->setConnection($db->getConnection());

// $accommodation = new Accommodation();
// $db = new Database();
// $accommodation->setConnection($db->getConnection());



print_r(json_encode($room->selectCreateRoomRoomData()));



