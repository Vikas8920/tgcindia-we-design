<?php
if(isset($_POST['btn-submit'])){
  
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = "Message: " . $_POST['message'];

  // Send email to info@tgcindia.com
  $to = "info@tgcindia.com, tgcanimation@gmail.com, ranjan354@gmail.com";
  $subject = "New Inquiry from WEB Design Course  AD TGC INDIA";
  $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();
  $mail_body = "Phone: $phone\nEmail: $email\n\n$message";
  mail($to, $subject, $mail_body, $headers);

  // Send confirmation email to user
  $user_subject = "Query Submitted";
  $user_headers = "From: info@tgcindia.com" . "\r\n" . "Reply-To: info@tgcindia.com" . "\r\n" . "X-Mailer: PHP/" . phpversion();
  $user_mail_body = "Dear $name,\n\nThank you for submitting your query. We will get back to you soon.\n\nBest regards,\nTGC India";
  mail($email, $user_subject, $user_mail_body, $user_headers);

  // Redirect to thank you page
  header('Location:  https://tgcindia.com/thanks');

  // Open a separate page
  echo "<script>window.open('https://www.tgcindia.com/adwords/graphic-design-course-in-delhi/assets/images/courses/graphic-pro.pdf');
  </script>";
}

?>