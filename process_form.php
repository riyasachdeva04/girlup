

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "sachdevar919@example.com"; // Replace with your email address
  $subject = "New Form Submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message . "\n";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Thank you for your submission!";
  } else {
    echo "Error sending email.";
  }
}
?>
