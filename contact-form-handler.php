<?php
ini_set("SMTP","smtp.gmail.com");
ini_set("port","465");

$to = "bennybwkrap@gmail.com";
$subject = "Hi!";
$body = "Hi,\n\nHow are you?";

if (mail($to, $subject, $body)) {
    echo("<p>Message successfully sent!</p>");
} else {
    echo("<p>Message delivery failed...</p>");
}
?>