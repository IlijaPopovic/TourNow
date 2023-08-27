<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/sessionHandler.php';

$organisation = new Organisation();

$organisation->mail = isset($_POST['mail']) ? $_POST['mail'] : die();
$organisation->password = isset($_POST['password']) ? $_POST['password'] : die();

$db = new Database();
$organisation->setConnection($db->getConnection());

$array = $organisation->checkIfOrganisationExists();

if (count($array) > 0) {
    $session = new MySessionHandler();
    $session->set("organisation", $array[0]['id']);
    print_r(json_encode($array));
}
else
{
   print_r(json_encode(array(
    'organisation' => 'no',
    'id' => 'no'
    )));
}

