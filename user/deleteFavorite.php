<?php
    // SAMO KORISNIK
    require_once '../config/database.php';
    require_once '../objects/table.php';

    isset($_POST['id']) ? $_POST['id'] : die();

    $db = new Database();

    $table = new Table();
    $connection = $db->getConnection();

    $query = <<<EOD
                DELETE FROM `favorite` WHERE `id` = {$_POST['id']}
                EOD;
    try
    {
        $query_solution = $connection->prepare($query);
        $query_solution->execute();
        print_r(['status' => 'deleted']);
    }
    catch (PDOException $e) 
    {
        print_r(['status' => $e->getMessage()]);
    }
    

