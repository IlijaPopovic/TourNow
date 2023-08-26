<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/destination.php';
// require_once '../objects/sessionHandler.php';

// $session = new MySessionHandler();
// $session->checkClient();

$destination = new Destination(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$destination->setConnection($db->getConnection());

print_r(json_encode($destination->selectChangeDestinationData()));
