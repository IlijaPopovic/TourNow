<?php

require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

class MyPHPMailerClass {
    private $mailer;

    public function __construct() {
        $this->mailer = new PHPMailer(true);
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

    public function sendEmail($to, $subject, $body, $attachmentPath = null) {
        try {
            $this->mailer->addAddress($to);
            $this->mailer->Subject = $subject;
            $this->mailer->Body = $body;

            if ($attachmentPath !== null) {
                $this->attachFile($attachmentPath);
            }

            $this->mailer->send();
            return true;
        } catch (Exception $e) {
            var_dump($e);
            return false;
        }
    }

    public function attachFile($filePath) {
        if (file_exists($filePath)) {
            $this->mailer->addAttachment($filePath);
        } else {
            throw new Exception("Attachment file does not exist: $filePath");
        }
    }
}