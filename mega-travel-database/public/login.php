<?php //fetchmegatravel.php
   require_once 'admin.php';
   $conn = new mysqli($hn, $un, $pw, $db);
   if ($conn->connect_error) die($conn->connect_error);
   $query = "SELECT * FROM travelInfo";
   $result = $conn->query($query);
   if (!$result) die($conn->error);
   $rows = $result->num_rows;
   for ($j = 0 ; $j < $rows ; ++$j)
   {
      $result->data_seek($j);
      $row = $result->fetch_array(MYSQLI_ASSOC);
      echo '<b>Client Name:</b> ' . $row['firstName'] . " " . $row['lastName'] . '<br>';
      echo '<b>Client Phone Number:</b> ' . $row['phoneNumber'] . '<br>';
      echo '<b>Client Email:</b> ' . $row['emailAddress'] . '<br>';
      echo '<b>Number of people traveling:</b> ' . $row['numberOfPeopleTraveling'] . '<br>';
      echo '<b>Travel Date:</b> ' . $row['date'] . '<br>';
      echo '<b>Destination:</b> ' . $row['destination'] . '<br>';
      echo '<b>Interested Activity 1:</b> ' . $row['activity'] . '<br>';
   }
   $result->close();
   $conn->close();
   ?>