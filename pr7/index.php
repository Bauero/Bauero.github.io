
<!DOCTYPE html>
<html>
<head>
  <title>My Database</title>
</head>
<body>
  <h1>Piotr Bauer</h1>
  <h3>Projekt 7 - Baza danych</h3>
  <?php
     session_start();

    $mysqli = new mysqli("mysql.ct8.pl","m35167_Bauero","Admin_123","m35167_Bauero");  
    
    if($_POST['usun'])
    {
      $value = $_POST['usun'];
      $mysqli->query("DELETE FROM osoby WHERE id=$value");
      unset($_SESSION['usun']);
      
      $sql = "SELECT * FROM osoby";
        $result = $mysqli -> query($sql);

        // Retrieve records from the database
      
        while($linia= $result -> fetch_array(MYSQLI_NUM))
        {
           $id = $linia[0];
           echo "
           <form action='' method='POST'>
           <input type='submit' value='$id' name='usun' id=$id style='border: solid red 0.3em' title='Usun rekord $id - $linia[1] $linia[2] $linia[3]'></input>
           <p>$linia[1] $linia[2] $linia[3]</p>
           </form>";
           echo "<hr>";
        }
        
        echo "<form action='' method='POST'>
          <input type='submit' value='dodaj'></input></form>";
      exit();
    }
    
    else if(isset($_POST['dodaj'])){
      echo "
        <form action='' method='POST'>
        <input type='text' name='imie' id='imie'></input>
        <input type='text' name='nazwisko' id='nazwisko'></input>
        <input type='text' name='wiek' id='wiek'></input>
        <input type='submit' value='Wpisz' name='Wpisz' id=$id style='border: solid blue 0.3em' title='Wpisz osobę o tych danych'></input>
        </form>";
      unset($_SESSION['dodaj']);
      exit();
      }
    
    else if(isset($_POST['Wpisz'])){
      echo "Wykonanie wpisu";
      $name= $_POST['imie'];
      $surname= $_POST['nazwisko'];
      $age= $_POST['wiek'];
      $dane = "INSERT INTO `osoby` (`id`, `imie`, `nazwisko`, `wiek`) VALUES (NULL, $name, $surname, $age)";
      $res = $mysqli -> query($dane);
      echo $res;
      unset($_SESSION['name']);
      unset($_SESSION['surname']);
      unset($_SESSION['age']);
      unset($_POST['dodane']);
      unset($_POST['Wpisz']);
      
      }
    $sql = "SELECT * FROM osoby";
        $result = $mysqli -> query($sql);

        // Retrieve records from the database
      
        while($linia= $result -> fetch_array(MYSQLI_NUM))
        {
           $id = $linia[0];
           echo "
           <form action='' method='POST'>
           <input type='submit' value='$id' name='usun' id=$id style='border: solid red 0.3em' title='Usun rekord $id - $linia[1] $linia[2] $linia[3]'></input>
           <p>$linia[1] $linia[2] $linia[3]</p>
           </form>";
           echo "<hr>";
        }
        
        echo "<form action='' method='POST'>
          <input type='submit' value='Dodaj' name='dodaj'  style='border: solid green 0.3em' title='Dodaj nową osobę do bazy'></input></form>";
    $mysqli -> close();
    ?>
  <pre>
session_start();

    $mysqli = new mysqli("mysql.ct8.pl","m35167_Bauero","Admin_123","m35167_Bauero");  
    
    if($_POST['usun'])
    {
      $value = $_POST['usun'];
      $mysqli->query("DELETE FROM osoby WHERE id=$value");
      unset($_SESSION['usun']);
      
      $sql = "SELECT * FROM osoby";
        $result = $mysqli -> query($sql);

        // Retrieve records from the database
      
        while($linia= $result -> fetch_array(MYSQLI_NUM))
        {
           $id = $linia[0];
           echo "
           form action='' method='POST'>
           input type='submit' value='$id' name='usun' id=$id>/input>
           p>$linia[1] $linia[2] $linia[3]/p>
           /form>";
           echo "hr>";
        }
       
        echo "form action='' method='POST'>
          input type='submit' value='dodaj'>/input>/form>";
      exit();
    }
    
    else if(isset($_POST['dodaj'])){
      echo "
        form action='' method='POST'>
        input type='text' name='imie' id='imie'>/input>
        nput type='text' name='nazwisko' id='nazwisko'>/input>
        input type='text' name='wiek' id='wiek'>/input>
        input type='submit' value='Wpisz' name='Wpisz' id=$id>/input>
        /form>";
      unset($_SESSION['dodaj']);
      exit();
      }
    
    else if(isset($_POST['Wpisz'])){
      echo "Wykonanie wpisu";
      $name= $_POST['imie'];
      $surname= $_POST['nazwisko'];
      $age= $_POST['wiek'];
      $dane = "INSERT INTO `osoby` (`id`, `imie`, `nazwisko`, `wiek`) VALUES (NULL, $name, $surname, $age)";
      $res = $mysqli -> query($dane);
      echo $res;
      unset($_SESSION['name']);
      unset($_SESSION['surname']);
      unset($_SESSION['age']);
      unset($_POST['dodane']);
      unset($_POST['Wpisz']);
      unset($_POST['dodane']);
      unset($_POST['Wpisz']);
      
      }
    $sql = "SELECT * FROM osoby";
        $result = $mysqli -> query($sql);

        // Retrieve records from the database
      
        while($linia= $result -> fetch_array(MYSQLI_NUM))
        {
           $id = $linia[0];
           echo "
           form action='' method='POST'>
           input type='submit' value='$id' name='usun' id=$id>/input>
           p>$linia[1] $linia[2] $linia[3]/p>
           /form>";
           echo "hr>";
        }
        
        echo "form action='' method='POST'>
          input type='submit' value='Dodaj' name='dodaj'>/input>/form>";
    $mysqli -> close();
</pre>
</body>
</html>
