<?php

require_once '../config/database.php';
require_once '../objects/admin.php';
require_once '../objects/sessionHandler.php';

$admin = new Admin();

$admin->name = isset($_POST['name']) ? $_POST['name'] : die();
$admin->password = isset($_POST['password']) ? $_POST['password'] : die();

$db = new Database();
$admin->setConnection($db->getConnection());


$array = $admin->checkIfAdminExists();

if (count($array) > 0) {
    $session = new MySessionHandler();
    $session->set("admin", $array[0]['id']);
    print_r(json_encode($array));
}
else
{
   print_r(json_encode(array(
    'admin' => 'no',
    'id' => 'no'
    )));
}

