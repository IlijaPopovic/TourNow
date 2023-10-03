<?php
echo 'PHP version: ' . phpversion();
require '../vendor/autoload.php'; // Include Composer's autoloader

use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\ImageRendererConfig;
use BaconQrCode\Writer;

require '../vendor/Endroid/QrCode/src/QrCode.php';
// require '../vendor/Endroid/QrCode/src/QrCodeInterface.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

// class QRCodeGenerator
// {
//     public static function generateQRCode($data, $outputFile)
//     {
//         // Create an image renderer
//         $renderer = new ImageRenderer(
//             new ImageRendererConfig(),
//             new ImagickImageBackEnd() // You can also use different backends like GDImageBackEnd
//         );

//         // Create a QR code writer
//         $writer = new Writer($renderer);

//         // Generate QR code
//         $qrCode = $writer->writeString($data);

//         // Save QR code image to the specified file
//         file_put_contents($outputFile, $qrCode->getData());
//     }
// }
?>