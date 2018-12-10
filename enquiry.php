<?php 

$firstname = $_POST["firstname"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$text = $_POST["text"];
$subscribe = $_POST["subscribe"];
if ($subscribe === "true") {
    $text .= "Subscription: YES";    
} else {
    $text .= "Subscription: NO";    
}
$subject = 'Form Submit Enquiry';
$from = $email;
$header = 'From:'.$from;
$mailto = 'enquiry@meridian-international-holding.com';
mail($mailto, $subject, $text, $header);

?>