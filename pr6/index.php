<?php
    
    session_start();
    
    if(isset($_POST["logowanie"]))
    { 
       
        $login=$_POST["login"];
        $haslo=$_POST["haslo"];
        $dobrylogin="admin";
        $dobrehaslo="admin";

        if($dobrylogin==$login && $dobrehaslo==$haslo)
        {   
            // dzięki temu sprawdzam czy jeszcze mogę wejść
            $_SESSION['logged']=true;
            header("Location: formularz.php");
        }
    }
   
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <title>Logowanie</title>
    <meta charset="utf-8">
    
    <link rel="stylesheet" href="style.css" />

</head>
<body>

    <div>
        <div class="wycentrowane"><h1>Logowanie</h1></div>

        <br>
            <form method="post" action="">
                <h3>Login</h3><br>
                <input type="text" name="login" required>

                <br>
                <br>

                <h3>Hasło</h3><br>
                <input  type="password" name="haslo" required>

                <br>
                <br>

                <button type="submit" name="logowanie">Zaloguj</button>
            </form> 
            <h3>login & hasło = "admin"</h3>
            
        <pre>
            
        session_start();
        
        if(isset($_POST["logowanie"]))
        { 
           
            $login=$_POST["login"];
            $haslo=$_POST["haslo"];
            $dobrylogin="admin";
            $dobrehaslo="admin";
    
            if($dobrylogin==$login && $dobrehaslo==$haslo)
            {   
                // dzięki temu sprawdzam czy jeszcze mogę wejść
                $_SESSION['logged']=true;
                header("Location: formularz.php");
            }
        }
       
        </pre>
    </div>



</body>
</html>
