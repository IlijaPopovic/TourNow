<?php

require_once '../config/database.php';
require_once '../objects/sessionHandler.php';


    $session = new MySessionHandler();
    $session->remove("organisation");

   print_r(json_encode(array(
    'status' => 'logged_out'
    )));

