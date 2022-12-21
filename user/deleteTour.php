<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/tour.php';

$tour = new Tour
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$tour->setConnection($db->getConnection());

print_r($tour->deleteTour());

