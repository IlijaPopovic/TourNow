<?php

require_once '../config/database.php';
require_once '../objects/accommodation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$accommodation = new Accommodation(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$accommodation->setConnection($db->getConnection());

print_r(json_encode($accommodation->selectChangeAccommodationData()));

