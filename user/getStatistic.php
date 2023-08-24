<?php
// SAMO ORGANIZACIJA
require_once '../config/database.php';
require_once '../objects/table.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation();

$db = new Database();

$table = new Table();
$connection = $db->getConnection();

$query = <<<EOD
            SELECT * FROM `filter`;
        EOD;
try
{
    $query_solution = $connection->prepare($query);
    $query_solution->execute();
    $array = $query_solution->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode(['status' => $array]));
}
catch (PDOException $e) 
{
    print_r(json_encode(['status' => $e->getMessage()]));
}
    
    

