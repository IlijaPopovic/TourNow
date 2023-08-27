<?php

require_once '../config/database.php';
require_once '../objects/user.php';

$user = new User
(
    isset($_GET['id']) ? $_GET['id'] : die('id')
);

$db = new Database();
$user->setConnection($db->getConnection());

$answer = $user->updateUserVerification();

if($answer["status"]=="updated")
{
    echo "Profile verified";
}