<?php 

require 'class.phpmailer.php';
require 'class.smtp.php';

$firstname = $_POST["firstname"];
$rec_email = $_POST["rec_email"];
$send_email = $_POST["send_email"];
$text = $_POST["text"];
$subscribe = $_POST["subscribe"];
$text .= "\n\n";
if ($subscribe === "true") {
    $text .= "Subscription: YES";    
} else {
    $text .= "Subscription: NO";    
}
$text .= "\n";
$text .= 'Recipient\'s Email: ' . $rec_email . "\n";
$text .= 'Sender\'s Name: ' . $firstname . "\n";
$text .= 'Sender\'s Email: ' . $send_email . "\n";
$text = nl2br($text);

$subject = 'Form Submit Recommendation';
$from = $send_email;

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'meridian-international-holding.com';
$mail->SMTPAuth = true; 
$mail->Username = 'merid25';
$mail->Password = '27z4t3pToB!2!';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
if (!empty($_POST['email'])) {
    $mail->setFrom($send_email); 
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