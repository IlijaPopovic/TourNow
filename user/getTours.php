<?php
// SVI
require_once '../config/database.php';
require_once '../objects/tour.php';

$tour = new Tour();

$db = new Database();
$tour->setConnection($db->getConnection());

print_r($tour->selectTours());

