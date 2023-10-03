<?php

require_once '../config/database.php';
require_once '../objects/reservation.php';
require_once '../objects/transport.php';
require_once '../objects/room.php';
require_once '../objects/sessionHandler.php';
require_once '../objects/mailer.php';
require_once '../objects/user.php';
require_once '../objects/tour.php';
include "phpqrcode/qrlib.php";

$session = new MySessionHandler();
$session->checkClient()['id']!=="no" ? null : die('nema ulogovanog klijenta');

$reservation = new Reservation
(
    null,
    null,
    1, 
    isset($_POST['user_id']) ? $_POST['user_id'] : die('user'), 
    isset($_POST['tour_id']) ? $_POST['tour_id'] : die('tour'),
    isset($_POST['transport_id']) ? $_POST['transport_id'] : null,
    isset($_POST['room_id']) ? $_POST['room_id'] : null
);

if(isset($_POST['transport_id']))
{
    $transport = new Transport($_POST['transport_id']);
    $db2 = new Database();
    $transport->setConnection($db2->getConnection());
    $transport->updateTransportBooking();
}

if(isset($_POST['room_id']))
{
    $room = new Room($_POST['room_id']);
    $db3 = new Database();
    $room->setConnection($db3->getConnection());
    $room->updateRoomBooking();
}

$db2 = new Database();
$user =  new user(isset($_POST['user_id']) ? $_POST['user_id'] : die('user'));
$user->setConnection($db2->getConnection());
$mail = $user->selectUser()[0]['mail'];

$db3 = new Database();
$tour = new tour(isset($_POST['tour_id']) ? $_POST['tour_id'] : die('tour'));
$tour->setConnection($db2->getConnection());
$tour_name = $tour->selectTour()[0]['name'];

$db = new Database();
$reservation->setConnection($db->getConnection());

$answer = $reservation->insertReservation();




if($answer["status"]=="inserted")
{   
    $PNG_TEMP_DIR = 'temp/';
    if (!file_exists($PNG_TEMP_DIR))
        mkdir($PNG_TEMP_DIR);
    $filename = $PNG_TEMP_DIR . 'test.png';
    $codeString = $answer["id"];
    $filename = $PNG_TEMP_DIR . 'test' . md5($codeString) . '.png';
    
    QRcode::png($codeString, $filename);
    $mailer = new MyPHPMailerClass();
    $to = $mail;
    $subject = 'QR CODE TICKET';
    $body = 'QR CODE TICKET FOR "'.$tour_name.'"';
    $attachmentPath = $filename;
    $mailer->sendEmail($to, $subject, $body, $attachmentPath);
}

print_r(json_encode($answer));