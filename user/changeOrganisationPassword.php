<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';

$organisation = new Organisation();
$organisation->mail = $_GET['mail'];
$organisation->password = $_GET['password'];

$db = new Database();
$organisation->setConnection($db->getConnection());

$organisation->updateOrganisationPassword();

echo "Password is changed";
