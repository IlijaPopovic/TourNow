<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkAdmin() ? null : die('nema ulogovanog admina');

$organisation = new Organisation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r(json_encode($organisation->deleteOrganisation()));

