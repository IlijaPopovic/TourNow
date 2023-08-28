<?php

require_once '../config/database.php';
require_once '../objects/room.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$room = new Room();
$db = new Database();
$room->setConnection($db->getConnection());

print_r(json_encode($room->selectCreateRoomRoomData()));



