<?php

require_once '../config/database.php';
require_once '../objects/statistic.php';

$statistic = new Statistic
(
    null,
    isset($_POST['organisation_id']) ? $_POST['organisation_id'] : die(), 
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die()
);

$db = new Database();
$statistic->setConnection($db->getConnection());

print_r(json_encode($statistic->insertStatistic()));