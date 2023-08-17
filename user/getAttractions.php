<?php
// SVI
require_once '../config/database.php';
require_once '../objects/attraction.php';

$attraction = new Attraction();

$db = new Database();
$attraction->setConnection($db->getConnection());

print_r(json_encode($attraction->selectAttractions()));

