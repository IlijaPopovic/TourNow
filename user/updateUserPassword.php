<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/user.php';

$user = new User
(
    isset($_POST['id']) ? $_POST['id'] : die('no id')
);

$user->password = isset($_POST['password']) ? $_POST['password'] : die('no password');

$db = new Database();
$user->setConnection($db->getConnection());

print_r($datauser = $user->updateUserPassword());





