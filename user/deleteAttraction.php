<?php

require_once '../config/database.php';
require_once '../objects/attraction.php';
require_once '../objects/fileHandler.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkAdmin();

$attraction = new Attraction
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$attraction->setConnection($db->getConnection());

$array = $attraction->selectAttraction();

$file = new FileHandler();

$file->deleteFile($array[0]['image']);

print_r(json_encode($attraction->deleteAttraction()));

