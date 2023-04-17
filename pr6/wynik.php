<?php
session_start();
if(!isset($_SESSION['wyslij']))
{
    header("Location: index.php");
    session_destroy();
}
if(isset($_POST['stronaLogowania']))
{
    header("Location: index.php");
    session_destroy();
}
?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <title>Oto dane formularza</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style1.css">
    

</head>
<body>
    <div class="wycentrowane">
        <div class="obramowanie">
            <div style="columns: 2;">
                <div><label for="name">Imie</label></div>
                <div><?php echo $_SESSION["name"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="surname">Nazwisko</label></div>
                <div><?php echo $_SESSION["surname"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="city">Miasto</label></div>
                <div><?php echo $_SESSION["city"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="street">Ulica</label></div>
                <div><?php echo $_SESSION["street"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="nrdom">Numer domu</label></div>
                <div><?php echo $_SESSION["nrdom"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="mieszk_nr">Numer Mieszkania</label></div>
                <div><?php echo $_SESSION["mieszk_nr"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="drlic">Prawo Jazdy</label></div>
                <div><?php echo $_SESSION["drlic"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="sex">Płeć</label></div>
                <div><?php echo $_SESSION["sex"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="email">Email</label></div>
                <div><?php echo $_SESSION["email"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="phone">Telefon</label></div>
                <div><?php echo $_SESSION["phone"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="birthday">Data Urodzenia</label></div>
                <div><?php echo $_SESSION["birthday"]?></div>
            </div>
            <div style="columns: 2;">
                <div><label for="pesel">PESEL</label></div>
                <div><?php echo $_SESSION["pesel"]?></div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div class="wycentrowane">
        <div style="columns: 2;">
            <div>
                <a href="https://pbosobista.000webhostapp.com/" action=<?php session_destroy();?>>Wyloguj i wróć na stronę główną</a>
            </div>
            <div>
                <form action = "" method="POST">
                <input name="stronaLogowania" type="submit" value="Po prostu wyloguj">
                </form>
            </div>
        </div>
    </div>
    
    <h3>Kody php z pliku</h3>
    <pre>
    session_start();
    if(!isset($_SESSION['wyslij']))
    {
        header("Location: index.php");
        session_destroy();
    }
    if(isset($_POST['stronaLogowania']))
    {
        header("Location: index.php");
        session_destroy();
    }
    
    .
    .
    .
    href="https://pbosobista.000webhostapp.com/" action= ?php session_destroy();?>
    Strona główna </>

    form action = "" method="POST">
    input name="stronaLogowania" type="submit" value="Po prostu wyloguj">
    /form>
    </pre>
</body>
</html>
