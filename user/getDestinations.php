<?php
// SVI
require_once '../config/database.php';
require_once '../objects/destination.php';

$destination = new Destination();

$db = new Database();
$destination->setConnection($db->getConnection());

print_r(json_encode($destination->selectDestinations()));

