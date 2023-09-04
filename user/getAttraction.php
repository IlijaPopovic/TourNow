<?php

require_once '../config/database.php';
require_once '../objects/attraction.php';
require_once '../objects/sessionHandler.php';

$attraction = new Attraction
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$attraction->setConnection($db->getConnection());

print_r(json_encode($attraction->selectAttraction()));


