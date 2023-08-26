<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/attraction.php';
// require_once '../objects/sessionHandler.php';

// $session = new MySessionHandler();
// $session->checkClient();

$attraction = new Attraction(
    isset($_POST['id']) ? $_POST['id'] : die('id'), 
);

$db = new Database();
$attraction->setConnection($db->getConnection());

print_r(json_encode($attraction->selectChangeAttractionData()));

