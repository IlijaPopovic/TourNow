<?php
    // SAMO USER
    require_once '../config/database.php';
    require_once '../objects/table.php';

    isset($_POST['id_user']) ? $_POST['id_user'] : die();
    isset($_POST['id_tour']) ? $_POST['id_tour'] : die();

    $db = new Database();

    $table = new Table();
    $connection = $db->getConnection();

    $query = <<<EOD
                INSERT INTO `favorite` (`id`, `user_id`, `location_id`) 
                VALUES (NULL, '{$_POST['id_user']}', '{$_POST['id_tour']}');;
                EOD;
    try
    {
        $query_solution = $connection->prepare($query);
        $query_solution->execute();
    }
    catch (PDOException $e) 
    {
        print_r(['status' => $e->getMessage()]);
    }
    print_r(['status' => 'inserted','id' => $connection->lastInsertId()]);
    

