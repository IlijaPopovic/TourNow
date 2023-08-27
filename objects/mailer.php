<?php

//namespace TourMeAround\objects;

require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

class MyPHPMailerClass {
    private $mailer;

    public function __construct() {
        $this->mailer = new PHPMailer(true); // Enable exceptions
        $this->initializeMailer();
    }

    private function initializeMailer() {
        // SMTP configuration
        $this->mailer->isSMTP();
        $this->mailer->Host = 'smtp.gmail.com';
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = 'nikolalubenovic@gmail.com';
        $this->mailer->Password = 'tfncdhvsgzribgbe';
        $this->mailer->SMTPSecure = 'ssl';
        $this->mailer->Port = 465;

        // Other settings
        $this->mailer->setFrom('TourMeAround@example.com', 'TourMeAround');
        $this->mailer->isHTML(true);
    }

    public function sendEmail($to, $subject, $body) {
        try {
            $this->mailer->addAddress($to);
            $this->mailer->Subject = $subject;
            $this->mailer->Body = $body;
            $this->mailer->send();
            return true;
        } catch (Exception $e) {
            var_dump($e);
            return false;
        }
    }
}