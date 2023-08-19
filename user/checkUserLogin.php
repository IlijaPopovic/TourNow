<?php

require_once '../objects/sessionHandler.php';
require_once '../config/database.php';

$session = new MySessionHandler();

print_r(json_encode($session->checkClient()));
