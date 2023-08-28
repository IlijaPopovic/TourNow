<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$organisation = new Organisation(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r(json_encode($organisation->selectChangeOrganisationData()));

