<?php

require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/organisation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkAdmin()['id']!=="no" ? null : die('nema ulogovanog admina');

$user = new User(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$user->setConnection($db->getConnection());

$organisation = new Organisation(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db2 = new Database();
$organisation->setConnection($db2->getConnection());




print_r(json_encode([$user->selectUsers(), $organisation->selectOrganisations()]));

