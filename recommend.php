<?php 

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
$text .= 'Recipient\'s Email: ' . $rec_email;
$subject = 'Form Submit Recommendation';
$from = $send_email;
$header = 'From:'.$from;
$mailto = 'enquiry@meridian-international-holding.com';
mail($mailto, $subject, $text, $header);

?>