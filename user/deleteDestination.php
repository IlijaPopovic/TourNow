<?php

require_once '../config/database.php';
require_once '../objects/destination.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" || $session->checkAdmin()['id']!=="no" ? null : die('nema ulogovane organisacije');

$destination = new Destination
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$destination->setConnection($db->getConnection());

print_r(json_encode($destination->deleteDestination()));

