<?php

require_once '../config/database.php';
require_once '../objects/statistic.php';

$statistic = new Statistic
(
    isset($_POST['id']) ? $_POST['id'] : die('NEMA')
);

$db = new Database();
$statistic->setConnection($db->getConnection());

print_r(json_encode($statistic->selectOranisationStatistics()));