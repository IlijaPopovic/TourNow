<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';

$organisation = new Organisation
(
    isset($_GET['id']) ? $_GET['id'] : die('id')
);

$db = new Database();
$organisation->setConnection($db->getConnection());

$answer = $organisation->updateOrganisationVerification();

if($answer["status"]=="updated")
{
    echo "Profile verified";
}