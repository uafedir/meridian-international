<?php

$email = $_POST["email"];
$text = $email . ' subscribed to newsletter.';
$subject = 'Form Submit Newsletter';
$mailto = 'enquiry@meridian-international-holding.com';
mail($mailto, $subject, $text);

?>