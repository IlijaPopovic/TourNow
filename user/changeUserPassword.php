<?php

require_once '../config/database.php';
require_once '../objects/user.php';
require_once '../objects/sessionHandler.php';

$token = $_GET['token'];
$session = new MySessionHandler();

if ($token === $session->get('reset_token')) {

    $user = new User();
    $user->mail = $session->get('mail');
    $user->password = $session->get('new_password');
    $db = new Database();
    $user->setConnection($db->getConnection());
    $up = $user->updateUserPassword();

    if($up['status']==='updated')
    {
        echo "Password updated successfully!";
    }
    else
    {
        echo "Token mismatch. Please try again.";
    }

}

unset($_SESSION['reset_token']);
unset($_SESSION['new_password']);
unset($_SESSION['email']);