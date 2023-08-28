<?php

require_once '../config/database.php';
require_once '../objects/accommodation.php';
require_once '../objects/file.php';
require_once '../objects/sessionHandler.php';

$session = new MySessionHandler();
$session->checkOrganisation()['id']!=="no" ? null : die('nema ulogovane organisacije');

$file = new File();
if (!isset($_FILES['image'])) die('nema slike');
$statusFile = $file->uploadFile($_FILES['image']);
if($statusFile['status'] == 'uploaded')
    $imageName = $statusFile['fileName'];

$accommodation = new Accommodation
(
    null,
    isset($_POST['name']) ? $_POST['name'] : die('name'), 
    isset($_POST['stars']) ? $_POST['stars'] : die('stars'),
    isset($imageName) ? $imageName : die(),
    isset($_POST['about']) ? $_POST['about'] : die('about')
);

$db = new Database();
$accommodation->setConnection($db->getConnection());

print_r(json_encode($accommodation->insertAccommodation()));

