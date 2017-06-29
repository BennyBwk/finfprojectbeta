<?php
if($_POST["submit"]) {
    $recipient="bennybwkrap@gmail.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject 
    $sender=$_POST["nameTB"];
    $senderCompany=$_POST["companyTB"];
    $senderContactNo=_POST["contactNoTB"];
    $enquiry=$_POST["equiryTB"];
    $mailBody="Name: $sender\nCompany: $senderCompany\nContact No: $senderContactNo\n\nEnquiry: $enquiry";
    mail($recipient, $subject, $mailBody);
	sleep(1);
	header("Location:index.html"); // Set here redirect page or destination page
}
?>