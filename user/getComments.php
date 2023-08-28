<?php
require_once '../config/database.php';
require_once '../objects/comment.php';


$comments = new Comment
(
    isset($_POST['id']) ? $_POST['id'] : die()
);

$db = new Database();
$comments->setConnection($db->getConnection());

print_r(json_encode($comments->selectComments()));

