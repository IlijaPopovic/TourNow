<?php

require_once '../config/database.php';
require_once '../objects/transport.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" || $session->checkAdmin()['id']!=="no" ? null : die('nema ulogovane organisacije');

$transport = new Transport();

$db = new Database();
$transport->setConnection($db->getConnection());

print_r(json_encode($transport->selectCreateTransportData()));

