<?php

require_once '../config/database.php';
require_once '../objects/transport.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$transport = new Transport
(
    isset($_POST['id']) ? $_POST['id'] : die('no id'),
    isset($_POST['name']) ? $_POST['name'] : die(), 
    isset($_POST['type']) ? $_POST['type'] : die(), 
    isset($_POST['start']) ? $_POST['start'] : die(),
    isset($_POST['end']) ? $_POST['end'] : die(),
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die()
);

$db = new Database();
$transport->setConnection($db->getConnection());

print_r(json_encode($transport->updateTransport()));
