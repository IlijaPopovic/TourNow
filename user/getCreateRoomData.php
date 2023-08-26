<?php
// SVI

require_once '../config/database.php';
require_once '../objects/room.php';

$room = new Room();
$db = new Database();
$room->setConnection($db->getConnection());

print_r(json_encode($room->selectCreateRoomRoomData()));



