<?php
//test
require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/sessionHandler.php';

$user = new User();

$user->mail = isset($_POST['mail']) ? $_POST['mail'] : die();
$user->password = isset($_POST['password']) ? $_POST['password'] : die();

$db = new Database();
$user->setConnection($db->getConnection());


$array = $user->checkIfUserExists();

if (count($array) > 0) {
    $session = new MySessionHandler();
    $session->set("user", $array[0]['id']);
    print_r(json_encode($array));
}
else
{
   print_r(json_encode(array(
    'user' => 'no',
    'id' => 'no'
    )));
}

