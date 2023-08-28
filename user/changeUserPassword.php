<?php

require_once '../config/database.php';
require_once '../objects/user.php';

$user = new User();
$user->mail = $_GET['mail'];
$user->password = $_GET['password'];

$db = new Database();
$user->setConnection($db->getConnection());

$user->updateUserPassword();

echo "Password is changed";
