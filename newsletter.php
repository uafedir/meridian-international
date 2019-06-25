<?php

require 'class.phpmailer.php';
require 'class.smtp.php';

$email = $_POST["email"];
$text = $email . ' subscribed to newsletter.';
$subject = 'Form Submit Newsletter';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'meridian-international-holding.com';
$mail->SMTPAuth = true; 
$mail->Username = 'merid25';
$mail->Password = '27z4t3pToB!2!';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
if (!empty($_POST['email'])) {
    $mail->setFrom($email); 
}
$mail->addAddress('enquiry@meridian-international-holding.com');

$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = $text;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';  
}

?>