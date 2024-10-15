<!-- floating form php -->
<?php  
 
 if(isset($_POST['submitfloat'])) {
     
    $success='';
    $failed='';
    
   $mailto = "info@tgcindia.com, tgcanimation@gmail.com";  //My email address
   //getting customer data
   $name = $_POST['name']; //getting customer name
   $fromEmail = $_POST['email']; //getting customer email
   $phone = $_POST['tel']; //getting customer Phome number
   
   $subject2 = "Confirmation: Message was submitted successfully | TGC Animation and Multimedia"; // For customer confirmation
 
   //Email body I will receive
   $message = " Name: " . $name . "\n"
   . "Phone Number: " . $phone . "\n"
    . "Email: " . $fromEmail . "\n";
 
   
  $headmsg = "New Enquiry For Need Guidance pop-up form Web Design Course in Delhi page from Ad TGC INDIA";
  
   
   //Message for client confirmation
   $message2 = "Dear" . "\n" . $name . "\n"
   . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
   . "You submitted the following message: " . "\n" . $_POST['message'] . "\n\n"
   . "Regards," . "\n" . "- TGC";
 
   //Email headers
   $headers = "From: " . $fromEmail; 
   $headers2 = "From: " . $mailto; // This will receive client
   
   //PHP mailer function
 
    $result1 = mail($mailto,$headmsg, $message, $headers); // This email sent to My address
    $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client
   
   //  header("Location: form-submit.php",);
    //Checking if Mails sent successfully
   
    if ($result1 && $result2) {
      $success = "Your Message was sent Successfully!";
      echo "<script>window.open('https://tgcindia.com/thanks/', '_self')</script>";
    } else {
      $failed = "Sorry! Message was not sent, Try again Later.";
      echo $failed;
    }
    
  }
    ?> 
    <!-- floating form php end here -->