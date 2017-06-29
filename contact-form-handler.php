<?php
$errors = '';
$myemail = 'bennybwkrap@gmail.com';//<-----Put Your email address here.
if(empty($_POST['nameTB'])  ||
   empty($_POST['companyTB']) ||
   empty($_POST['contactNoTB'])) ||
    empty($_POST['equiryTB']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['nameTB'];
$company = $_POST['companyTB'];
$contact_no = $_POST['contactNoTB'];
$enquiry = $_POST['equiryTB'];

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission from <b>$name</b>";
$email_body = "You have received a new enquiry. ".
" Here are the details:\n Name: $name \n ".
"Company: $company\n Contact No: $contact_no\n Enquiry \n $enquiry";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: index.html');
}
?>