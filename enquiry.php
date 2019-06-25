<?php 

require 'class.phpmailer.php';
require 'class.smtp.php';

$firstname = $_POST["firstname"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$text = $_POST["text"];
$subscribe = $_POST["subscribe"];
$text .= "\n\n";
if ($subscribe === "true") {
    $text .= "Subscription: YES";    
} else {
    $text .= "Subscription: NO";    
}
$text .= "\n";
$text .= 'First name: ' . $firstname . "\n";
$text .= 'Email: ' . $email . "\n";
$text .= 'Surname: ' . $surname . "\n";
$text .= 'Telephone: ' . $tel . "\n";
$text = nl2br($text);

$subject = 'Form Submit Enquiry';
$from = $email;

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