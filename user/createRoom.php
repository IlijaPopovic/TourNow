<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/room.php';
require_once '../objects/file.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation();

// var_dump($_POST);

$room = new Room
(
    null,
    isset($_POST['beds_number']) ? $_POST['beds_number'] : die(''), 
    isset($_POST['name']) ? $_POST['name'] : die(''), 
    isset($_POST['kid_number']) ? $_POST['kid_number'] : die(''),
    isset($_POST['service']) ? $_POST['service'] : die(''), 
    0,
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die(''),
    isset($_POST['accommodation_id']) ? $_POST['accommodation_id'] : die('')
);

$db = new Database();
$room->setConnection($db->getConnection());

print_r(json_encode($room->insertRoom()));

