<?php
  $mysqli = new mysqli("mysql.ct8.pl","m35167_Bauero","Admin_123","m35167_Bauero");

  // Check connection
  if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
  else
  {
    echo "Udało się połączyć";
  }
  
  $sql = "SELECT * FROM osoby";
  $result = $mysqli -> query($sql);

  while($linia= $result -> fetch_array(MYSQLI_NUM))
  {
    echo "<hr>";
    printf ("%s %s %s\n", $linia[1], $linia[2],$linia[3]);
  }

  $mysqli -> close();
?>