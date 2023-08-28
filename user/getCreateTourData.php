<?php

require_once '../config/database.php';
require_once '../objects/tour.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$tour = new Tour();
$db = new Database();
$tour->setConnection($db->getConnection());

print_r(json_encode($tour->selectCreateTourData()));



