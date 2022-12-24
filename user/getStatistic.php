<?php
    
    require_once '../config/database.php';
    require_once '../objects/table.php';

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
        print_r(['status' => $array]);
    }
    catch (PDOException $e) 
    {
        print_r(['status' => $e->getMessage()]);
    }
    
    

