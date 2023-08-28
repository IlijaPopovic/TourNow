<?php

require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkAdmin()['id']!=="no" ? null : die('nema admina');

$user = new User
(
    isset($_POST['id']) ? $_POST['id'] : die('id')
);

$db = new Database();
$user->setConnection($db->getConnection());

print_r(json_encode($user->updateActivationOrDeactivationUser()));
