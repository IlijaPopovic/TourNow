<?php
// SVI
require_once '../config/database.php';
require_once '../objects/user.php';

$user = new User
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$user->setConnection($db->getConnection());

print_r($user->selectUser());

