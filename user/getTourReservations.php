<?php

require_once '../config/database.php';
require_once '../objects/tour.php';



$tour = new Tour
(
    isset($_POST['id']) ? $_POST['id'] : die('NEMA')
);

$db = new Database();
$tour->setConnection($db->getConnection());

print_r(json_encode($tour->selectTourReservations()));

