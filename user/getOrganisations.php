<?php
// SVI
require_once '../config/database.php';
require_once '../objects/organisation.php';

$organisation = new Organisation();

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r(json_encode($organisation->selectOrganisations()));

