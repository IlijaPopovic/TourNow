<?php

require_once '../config/database.php';
require_once '../objects/organisation.php';
require_once '../objects/sessionHandler.php';


$token = $_GET['otoken'];
$session = new MySessionHandler();

if ($token === $session->get('oreset_token')) {

    $organisation = new Organisation();
    $organisation->mail = $session->get('omail');
    $organisation->password = $session->get('onew_password');
    $db = new Database();
    $organisation->setConnection($db->getConnection());
    $up = $organisation->updateOrganisationPassword();

    if($up['status']==='updated')
    {
        echo "Password updated successfully!";
    }
    else
    {
        echo "Token mismatch. Please try again.";
    }

}

unset($_SESSION['oreset_token']);
unset($_SESSION['onew_password']);
unset($_SESSION['oemail']);

