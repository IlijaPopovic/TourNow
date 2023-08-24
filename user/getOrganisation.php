<?php
// SVI
require_once '../config/database.php';
require_once '../objects/organisation.php';

$organisation = new Organisation
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$organisation->setConnection($db->getConnection());

print_r(json_encode($organisation->selectOrganisation()));

