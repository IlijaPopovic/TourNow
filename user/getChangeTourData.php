<?php
// SVI

require_once '../config/database.php';
require_once '../objects/tour.php';

$tour = new Tour(
    isset($_POST['id']) ? $_POST['id'] : die('id')
);
$db = new Database();
$tour->setConnection($db->getConnection());

print_r(json_encode($tour->selectChangeTourData()));



