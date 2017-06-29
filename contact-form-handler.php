<?php
ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");

if(isset($_POST['submit'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "bennybwkrap@gmail.com";
    $email_subject = "Your email subject line";

    $error_message = "";
 
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message = "First Line\nSecond Line\nThird Line";
 
// create email headers
$headers = 'From: '.$email_to."\r\n".
'Reply-To: '.$email_to."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
    header("index.html");
}
?>