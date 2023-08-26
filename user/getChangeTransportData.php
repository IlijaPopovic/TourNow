<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/transport.php';
// require_once '../objects/sessionHandler.php';

// $session = new MySessionHandler();
// $session->checkClient();

$transport = new Transport(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$transport->setConnection($db->getConnection());

print_r(json_encode($transport->selectChangeTransportData()));

