<?php
// SVI
require_once '../config/database.php';
require_once '../objects/transport.php';

$transport = new Transport
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$transport->setConnection($db->getConnection());

print_r(json_encode($transport->selectTransport()));

