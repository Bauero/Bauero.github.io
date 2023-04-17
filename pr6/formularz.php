<?php
    session_start();

    if (!isset($_SESSION['logged']))
    {
        header("Location: index.php");
    }

    if (isset($_POST['wyslij'])){
        
        $_SESSION['name']=$_POST['name'];
        $_SESSION['surname']=$_POST['surname'];
        $_SESSION['city']=$_POST['city'];
        $_SESSION['street']=$_POST['street'];
        $_SESSION['nrdom']=$_POST['nrdom'];
        $_SESSION['mieszk_nr']=$_POST['mieszk_nr'];
        $_SESSION['drlic']=$_POST['drlic'];
        $_SESSION['sex']=$_POST['sex'];
        $_SESSION['email']=$_POST['email'];
        $_SESSION['phone']=$_POST['phone'];
        $_SESSION['birthday']=$_POST['birthday'];
        $_SESSION['pesel']=$_POST['pesel'];
        $_SESSION["wyslij"]=true;

        header("Location: wynik.php");
    }

    if (isset($_POST['wylogoj']))
    {
        session_destroy();
    }

?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>
        Formularz
    </title>

    <script src="functions.js"> </script>
    <link rel="stylesheet" href="style.css">
</head>
    
<body>
    <form action="" method="POST">
        <input type="submit" name="wylogoj" value="wyloguj"></input>
    </form>
    <form  action="" method="POST">
        <div>
            <label for="name">Imię</label>
            <input type="text" name="name" require>
        </div>
        
        <div>
            <label for="surname">Nazwisko:</label>
            <input type="text" name="surname" require>
        </div>
        
        <div>
            <label for="city">Miasto:</label>
            <input type="text" name="city" require>
        </div>

        <div>
            <label for="street">Ulica:</label>
            <input type="text" name="street" require>
        </div>

        <br>

        <div style="columns: 2;">
            <div style="columns: 2;">
                <div><label for="nrdom">Numer domu:</label></div>
                <div><input style="width: inherit" type="text"  name="nrdom" require></div>
            </div>
            <div style="columns: 2;">
                <div><label for="mieszk_nr">Numer Mieszkania:</label></div>
                <div><input style="width: inherit" type="text" name="mieszk_nr"></div>
            </div>
        </div>

        <br>
        
        <div style="columns: 4;">
            <div><label style="text-align: center;" for="drlic">Prawko</label></div>
            <div><select style="width: inherit" name="drlic">
                <option value="None">Nie posiadam</option>
                <option value="AM">AM</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A">A</option>
                <option value="B1">B1</option>
                <option value="B">B</option>
                <option value="B+E">B+E</option>
                <option value="C">C</option>
                <option value="C1">C1</option>
                <option value="C1+E">C1+E</option>
                <option value="C+E">C+E</option>
                <option value="D">D</option>
                <option value="D1">D1</option>
                <option value="D1+E">D1+E</option>
                <option value="D+E">D+E</option>
                <option value="T">T</option>
              </select></div>
              <div>
                <p style="text-align: center;">Wybierz płeć</p>
              </div>
              <div><select style="width: inherit" name="sex" >
                <option value="None">Nie chcę podawać</option>
                <option value="AM">Kobieta</option>
                <option value="A1">Mężczyzna</option>
                <option value="A1">Inne</option>
              </select></div>
        </div>

        <br>

        <div>
            <label for="email">Email:</label>
            <input type="email" name="email">
        </div>

        <br><br>
        <div style="columns: 2;">
            <div style="columns: 2;">
                <div><label for="phone">Numer telefonu:</label></div>
                <div><input style="width: inherit" type="tel" name="phone" placeholder="+XX XXX XXX XXX"></div>
            </div>
            <div style="columns: 2;">
                <div><label for="birthday">Data urodzenia:</label></div>
                <div><input style="width: inherit" type="date" name="birthday" id="birthdaydate"></div>
            </div>
        </div>
        <br>
        <div style="columns: 2;">
            <div style="columns: 2;">
                <div><label for="pesel">PESEL:</label></div>
                <div><input type="text" name="pesel"></div>
            </div>
            <div>
                <input style="width: inherit;" type="submit" name="wyslij" value="Wysłane">
            </div>
        </div>
    </form>
    
    <script>
            eval(dajDate())
        </script>
    <h3>Kod PHP</h3>
    <pre>
    
    session_start();

    if (!isset($_SESSION['logged']))
    {
        header("Location: index.php");
    }

    if (isset($_POST['wyslij'])){
        
        $_SESSION['name']=$_POST['name'];
        $_SESSION['surname']=$_POST['surname'];
        $_SESSION['city']=$_POST['city'];
        $_SESSION['street']=$_POST['street'];
        $_SESSION['nrdom']=$_POST['nrdom'];
        $_SESSION['mieszk_nr']=$_POST['mieszk_nr'];
        $_SESSION['drlic']=$_POST['drlic'];
        $_SESSION['sex']=$_POST['sex'];
        $_SESSION['email']=$_POST['email'];
        $_SESSION['phone']=$_POST['phone'];
        $_SESSION['birthday']=$_POST['birthday'];
        $_SESSION['pesel']=$_POST['pesel'];
        $_SESSION["wyslij"]=true;

        header("Location: wynik.php");
    }
    </pre>
</body>

</body>
</html>