<?php

require_once '../config/database.php';
require_once '../objects/attraction.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" || $session->checkClient()['id']!=="no" || $session->checkAdmin()['id']!=="no" ? null : die('nema ulogovane organisacije');

$attraction = new Attraction();
$db = new Database();
$attraction->setConnection($db->getConnection());

print_r(json_encode($attraction->selectCreateAttractionData()));



