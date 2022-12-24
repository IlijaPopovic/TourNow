<?php
// KORISNIK SAMO
require_once '../config/database.php';
require_once '../objects/comment.php';

$comment = new Comment
(
    null,
    isset($_POST['grade']) ? $_POST['grade'] : die(), 
    isset($_POST['opinion']) ? $_POST['opinion'] : die(), 
    isset($_POST['user_id']) ? $_POST['user_id'] : die(), 
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die()
);

$db = new Database();
$comment->setConnection($db->getConnection());

print_r($comment->insertComment());
