<?php

require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema admina');

$reservation = new reservation
(
    isset($_POST['id']) ? $_POST['id'] : die('id')
);

$db = new Database();
$reservation->setConnection($db->getConnection());

print_r(json_encode($reservation->updateActivationOrDeactivationReservation()));
