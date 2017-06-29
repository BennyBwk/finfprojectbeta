<?php
ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");
ini_set("smtp_auth","true");
ini_set("smtp_debug","1");
ini_set("smtp_secure","ssl");

$to = "bennybwkrap@gmail.com";
$subject = "Hi!";
$body = "Hi,\n\nHow are you?";

if (mail($to, $subject, $body)) {
    echo("<p>Message successfully sent!</p>");
} else {
    echo("<p>Message delivery failed...</p>");
}
?>