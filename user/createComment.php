<?php
require_once '../config/database.php';
require_once '../objects/comment.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog klijenta');

$comment = new Comment
(
    null,
    isset($_POST['grade']) ? $_POST['grade'] : die(), 
    isset($_POST['opinion']) ? $_POST['opinion'] : die(), 
    isset($_POST['user_id']) ? $_POST['user_id'] : die(), 
    isset($_POST['destination_id']) ? $_POST['destination_id'] : die()
);

$db = new Database();
$comment->setConnection($db->getConnection());

$comment->deleteUserComment();

print_r(json_encode($comment->insertComment()));

